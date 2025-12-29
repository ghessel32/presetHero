export function cleanCode(code) {
  return (
    code
      // normalize line endings
      .replace(/\r\n/g, "\n")

      // 🔴 remove invisible Unicode junk (CRITICAL)
      .replace(/\u00A0/g, " ") // non-breaking space → normal space
      .replace(/\u200B/g, "") // zero-width space
      .replace(/\uFEFF/g, "") // BOM

      // remove trailing spaces/tabs per line
      .replace(/[ \t]+$/gm, "")

      // collapse 3+ empty lines into 2
      .replace(/\n{3,}/g, "\n\n")

      // trim only start/end of entire file
      .trim()
  );
}
