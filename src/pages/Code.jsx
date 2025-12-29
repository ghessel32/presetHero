import React from "react";
import NavbarCode from "../code-snippets/NavbarCode";
import CodeSnippet from "../code-snippets/CodeSnippetUtil";
import { usebgstyleStore } from "../store/bgstyleStore";

function Code() {
  const { bgstyles } = usebgstyleStore();
  const animationCssCode = `
/* Fade animation */
.anim-fade {
  animation: fade-in var(--anim-duration, 0.8s) ease-out var(--anim-delay, 1s)
    both;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up animation */
.anim-slide-up {
  animation: slide-up var(--anim-duration, 0.6s) ease-out var(--anim-delay, 0s)
    both;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide Down animation */
.anim-slide-down {
  animation: slide-down var(--anim-duration, 0.6s) ease-out
    var(--anim-delay, 0s) both;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale animation */
.anim-scale {
  animation: scale-in var(--anim-duration, 0.6s) ease-out var(--anim-delay, 0s)
    both;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`;

  const dynamicBgSetupCode = `npx shadcn@latest add @react-bits/${bgstyles.animationPattern}-JS-TW`;

  return (
    <div className="w-full h-screen">
      <div className="m-6 text-lg max-w-xl font-bold">
        Copy the main JSX code first. If you used animations or dynamic
        backgrounds, copy those sections too.
      </div>
      <NavbarCode />
      <CodeSnippet
        title="Animation CSS (optional)"
        language="css"
        code={animationCssCode}
        className="h-3/4"
      />
      <CodeSnippet
        title="Dynamic Background Setup"
        language="bash"
        code={dynamicBgSetupCode}
      />
    </div>
  );
}

export default Code;
