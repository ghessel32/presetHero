import { useEffect } from "react";
import { useTextStore } from "./store/textstyleStore";

export function usePreviewFont() {
  const { fontConfig } = useTextStore();

  useEffect(() => {
    if (!fontConfig?.url) return;

    // avoid duplicates
    if (document.querySelector(`link[href="${fontConfig.url}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontConfig.url;
    link.dataset.previewFont = "true";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [fontConfig.url]);
}
