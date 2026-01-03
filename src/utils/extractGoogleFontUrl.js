export function extractGoogleFontUrl(input) {
  if (!input) return "";

  // Case 1: user pasted full <link> tag
  const hrefMatch = input.match(
    /href=["'](https:\/\/fonts\.googleapis\.com\/css2[^"']+)["']/
  );
  if (hrefMatch) return hrefMatch[1];

  // Case 2: user pasted raw URL
  const urlMatch = input.match(
    /(https:\/\/fonts\.googleapis\.com\/css2[^\s'"]+)/
  );
  if (urlMatch) return urlMatch[1];

  return "";
}
