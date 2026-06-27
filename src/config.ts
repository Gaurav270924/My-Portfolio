import vacayVibeImage from "./assets/vacayvibe.png";

export const config = {
    developer: {
        name: "Gaurav",
        fullName: "Gaurav Yadav",
        title: "Full-Stack Developer",
        description: "Full-Stack Developer specializing in MERN stack and Laravel/PHP, building scalable web applications, RESTful APIs, and AI-powered platforms."
    },
    social: {
        github: "Gaurav270924",
        email: "gaurav249y@gmail.com",
        location: "Lucknow, India"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science and Engineering graduate (BTech, SGPA 8.0) from Babu Banarasi Das Institute of Technology and Management, Lucknow (2025). Currently working as an Associate Software Engineer at 3EA Limited, I specialize in building full-stack web applications using the MERN stack and Laravel/PHP. I have hands-on experience developing RESTful APIs, a production Laravel-based HRMS, and AI-powered platforms. With 300+ LeetCode problems solved, I am passionate about writing clean, scalable code and turning complex requirements into elegant software solutions."
    },
    experiences: [
        {
            position: "Associate Software Engineer",
            company: "3EA Limited",
            period: "Aug 2025 - Present",
            location: "Lucknow, Uttar Pradesh",
            description: "Contributing to live production projects using PHP and Laravel. Developed and integrated RESTful APIs and independently built a Laravel-based HRMS for Hera Public School, enabling staff attendance tracking, leave workflows, and automated payroll generation.",
            responsibilities: [
                "Successfully completed an 8-month, industry-focused web development internship, contributing to live production projects using PHP and Laravel",
                "Developed and integrated RESTful APIs with front-end interfaces to ensure smooth and efficient data exchange",
                "Independently developed and deployed a Laravel-based HRMS for Hera Public School, enabling staff attendance tracking, leave workflows, and automated payroll generation"
            ],
            technologies: ["PHP", "Laravel", "RESTful APIs", "MySQL", "MVC Architecture"]
        },
        {
            position: "MERN Stack Development Intern",
            company: "Shape My Skills",
            period: "July 2024 - Sept. 2024",
            location: "Lucknow, Uttar Pradesh",
            description: "Gained hands-on experience with the full MERN stack — MongoDB, Express.js, React.js, and Node.js. Built responsive front-end components, integrated back-end services, and leveraged AI-assisted development tools to improve debugging and API performance.",
            responsibilities: [
                "Completed an internship at ShapeMySkills, gaining hands-on experience with the MERN stack, including MongoDB, Express.js, React.js, and Node.js",
                "Created responsive and dynamic front-end components using React.js and integrated them with back-end services built on Node.js and Express.js",
                "Leveraged AI-assisted development tools to improve debugging workflows and optimize API performance"
            ],
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Recruitment & Induction System",
            category: "Full Stack / MVC",
            technologies: "Laravel, PHP, React 18, Inertia.js, Tailwind CSS, MySQL, Chart.js, Recharts, React Quill, html2pdf.js, SweetAlert2",
            image: "/images/rsi.png",
            description: "An industry-level Recruitment and Induction System (RSI) to automate hiring workflows and employee onboarding. Built with Laravel + Inertia.js + React 18, features rich-text job descriptions (React Quill), analytics dashboards (Chart.js, Recharts), PDF report generation (html2pdf.js), and optimized MySQL databases for candidate profiles, recruitment stages, interview tracking, and employee induction records.",
            link: "https://rsi.3ea.in/login"
        },
        {
            id: 2,
            title: "MockMate",
            category: "AI / Voice Interview Platform",
            technologies: "Next.js 15, React 19, TypeScript, Tailwind CSS v4, Vapi AI, Google AI SDK, Daily.co, Firebase, React Hook Form, Zod",
            image: "/images/mockmate.png",
            description: "An AI-powered voice mock interview platform using Vapi AI for real-time voice interviews, Google AI SDK for generating role-specific questions and feedback, and Daily.co for video calling. Built with Next.js 15 (Turbopack), Firebase for auth and storage, and Zod + React Hook Form for validated input — delivering a realistic, dynamic interview simulation experience.",
            link: "https://ai-mock-interviews-application-rirz.vercel.app/"
        },
        {
            id: 3,
            title: "La-Horeca – Hospitality Procurement Platform",
            category: "E-Commerce / B2B Marketplace",
            technologies: "React 19, TypeScript, Vite 7, Tailwind CSS v4, Laravel, Inertia.js, Convex, Radix UI, React Query, Motion, Zod, Recharts, OIDC Auth",
            image: "/images/lahoreca.png",
            description: "A premium B2B procurement ecosystem for the hospitality industry serving 500+ clients across 12+ countries. Built with React 19 + TypeScript + Convex (real-time backend), full Radix UI / shadcn component library, React Query for server state, Motion animations, Zod validation, and OIDC-based authentication. Features 10,000+ products across 150+ global brands with category browsing, bulk inquiry, and analytics dashboards.",
            link: "#"
        },
        {
            id: 4,
            title: "VacayVibe",
            category: "Full Stack / Booking Platform",
            technologies: "Node.js, Express, MongoDB, Mongoose, EJS, Passport.js, Cloudinary, Mapbox, Multer, Joi",
            image: vacayVibeImage,
            description: "An Airbnb-inspired vacation and property booking platform built with Node.js + Express MVC architecture and server-side EJS rendering. Features Passport.js authentication, Cloudinary image uploads, Mapbox interactive maps, Multer file handling, MongoDB session persistence, and Joi validation — deployed on Render.",
            link: "https://vacayvibe.onrender.com/"
        },
        {
            id: 5,
            title: "GMCP – Growth Management Consulting Program",
            category: "Web / Consulting Platform",
            technologies: "React 19, Vite, Tailwind CSS v4, Laravel, Three.js, Vanta.js, MediaPipe, face-api.js, Axios",
            image: "/images/gmcp.png",
            description: "Full-stack platform for 3EA Global's Growth Management Consulting Program — a structured 12-month consulting career pathway for the 2026 cohort. Features animated 3D backgrounds (Three.js + Vanta), AI-powered face detection during assessments (MediaPipe + face-api.js), application tracking, selection process stages, and a career path timeline with direct 3EA Global placement at 8 LPA.",
            link: "https://gmcp.in/"
        }
    ],
    contact: {
        email: "gaurav249y@gmail.com",
        github: "https://github.com/Gaurav270924",
        linkedin: "https://linkedin.com/in/gaurav2707",
        twitter: "#",
        facebook: "#",
        instagram: "#"
    },
    skills: {
        develop: {
            title: "BACKEND DEV",
            description: "Building robust APIs & server-side solutions",
            details: "Developing scalable backend systems and RESTful APIs using Laravel, PHP, Node.js, and Express.js. Experienced in MVC architecture, database design with MySQL and MongoDB, and deploying production-grade web applications.",
            tools: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs", "MVC Framework", "MySQL", "MongoDB"]
        },
        design: {
            title: "FRONTEND DEV",
            description: "Modern, responsive web interfaces",
            details: "Building responsive and interactive user interfaces using React.js, Next.js, and Tailwind CSS. Experienced in Inertia.js for seamless backend-frontend integration, Bootstrap for rapid UI, and OpenAI API for AI-powered features.",
            tools: ["React.js", "Next.js", "Inertia.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "TypeScript"]
        }
    }
};
