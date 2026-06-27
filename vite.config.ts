import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

declare const Buffer: {
  isBuffer(value: unknown): boolean;
  from(value: unknown): { toString(encoding: string): string };
  concat(values: unknown[]): { toString(encoding: string): string };
};
declare const process: {
  cwd(): string;
  env: Record<string, string | undefined>;
};

// https://vitejs.dev/config/
const devApiPlugin = (): Plugin => ({
  name: "dev-api-chat",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api/chat", async (req, res) => {
      const request = req as typeof req & {
        method?: string;
        on(event: "data", callback: (chunk: unknown) => void): void;
        on(event: "end", callback: () => void): void;
        on(event: "error", callback: (error: Error) => void): void;
      };

      if (request.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }

      try {
        const chunks = await new Promise<unknown[]>((resolve, reject) => {
          const bodyChunks: unknown[] = [];

          request.on("data", (chunk) => {
            bodyChunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          });
          request.on("end", () => resolve(bodyChunks));
          request.on("error", reject);
        });

        const bodyText = Buffer.concat(chunks).toString("utf-8");
        const body = bodyText ? JSON.parse(bodyText) : {};
        const apiPath = "./api/chat.js";
        const { default: handler } = await import(apiPath);

        await handler(
          Object.assign(request, { body }),
          {
            status(code: number) {
              res.statusCode = code;
              return this;
            },
            json(data: unknown) {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(data));
            },
          }
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";

        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Local API Error", details: message }));
      }
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  Object.assign(process.env, env);

  return {
    plugins: [react(), devApiPlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ["three", "three-stdlib"],
            "react-three": ["@react-three/fiber", "@react-three/drei"],
            gsap: ["gsap"],
            vendor: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    optimizeDeps: {
      include: ["three", "gsap", "lenis"],
    },
  };
});
