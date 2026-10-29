import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          GauravYadav
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span>&nbsp; Full-Stack Developer &nbsp;</span> <span>&nbsp; MERN &amp; Laravel &nbsp;</span>
            <span>&nbsp; Full-Stack Developer &nbsp;</span> <span>&nbsp; MERN &amp; Laravel &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let rafId = 0;
  let stopped = false;

  const cap = 92;
  const drift = () => {
    if (stopped) return;
    percent += (cap - percent) * 0.03 + 0.1;
    if (percent > cap) percent = cap;
    setLoading(Math.round(percent));
    rafId = requestAnimationFrame(drift);
  };
  rafId = requestAnimationFrame(drift);

  function clear() {
    stopped = true;
    cancelAnimationFrame(rafId);
    percent = 100;
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      stopped = true;
      cancelAnimationFrame(rafId);
      const start = percent;
      const startTime = performance.now();
      const duration = 450;

      const finish = (now: number) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        percent = start + (100 - start) * eased;
        setLoading(Math.round(percent));
        if (t < 1) {
          rafId = requestAnimationFrame(finish);
        } else {
          percent = 100;
          setLoading(100);
          resolve(100);
        }
      };
      rafId = requestAnimationFrame(finish);
    });
  }
  return { loaded, percent, clear };
};
