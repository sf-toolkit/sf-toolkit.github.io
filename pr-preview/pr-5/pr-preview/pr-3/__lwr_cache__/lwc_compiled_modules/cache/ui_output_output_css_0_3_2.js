function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".field-label" + shadowSelector + " {font-size: 1.4rem;color: gray;}p" + shadowSelector + " {margin: 0;}a" + shadowSelector + " {text-decoration: var(--text-decoration);color: var(--color-text-link);}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];