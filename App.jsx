import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw, css } from "twind";

setup({});

const upAndDown = css.keyframes({
  "0%, 100%": { transform: "translateZ(-100px) rotate(0deg)" },
  "50%": { transform: "translateZ(100px) rotate(90deg)" },
});

const App = () => (
  <aside
    className={tw`
      w-[300px] h-[300px] relative
      transform-style-[preserve-3d]
      perspective-[500px] rotate-x-[60deg]
      flex flex-wrap content-center
    `}
  >
    {Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className={tw`
          absolute inset-[calc(var(--s)*10px)]
          shadow-inner shadow-[#8b008b99]
          clip-[polygon(25%_0%,100%_0%,100%_100%,25%_100%,0%_50%)]
          animate-[${upAndDown} 3s infinite ease-in-out]
        `}
        style={{ "--s": i }}
      />
    ))}
  </aside>
);

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className={tw`h-screen w-full bg-black flex flex-wrap place-content-center overflow-hidden`}>
      <App />
    </div>
  </React.StrictMode>
);

export default App;
