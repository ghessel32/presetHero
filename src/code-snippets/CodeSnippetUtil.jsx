import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeSnippet({ code, language = "jsx", title }) {
  const [copied, setCopied] = useState(false);
  function copyPlainText(code) {
    const clean = code
      .replace(/\r\n/g, "\n")
      .replace(/\u00A0/g, " ")
      .replace(/\u200B/g, "")
      .replace(/\uFEFF/g, "")
      .replace(/[ \t]+$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    navigator.clipboard.writeText(clean);
  }
  return (
    <div className="relative m-6 w-3/4 h-3/4 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <button
          onClick={() => {
            copyPlainText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="cursor-pointer text-xs px-2 py-1 bg-zinc-800 text-white rounded"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        wrapLongLines
        customStyle={{
          borderRadius: "12px",
          padding: "20px",
          fontSize: "14px",
          userSelect: "none",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;
