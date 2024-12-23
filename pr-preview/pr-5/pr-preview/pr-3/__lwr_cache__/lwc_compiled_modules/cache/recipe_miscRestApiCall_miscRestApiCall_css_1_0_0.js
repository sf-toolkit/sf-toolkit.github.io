function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".search-results" + shadowSelector + " {list-style: none;}ul" + shadowSelector + " {padding: 0;}li" + shadowSelector + " {margin: 0;}.margin-vertical-small" + shadowSelector + " {margin: 0 4 0 4;}a" + shadowSelector + " {text-decoration: var(--text-decoration);color: var(--color-text-link);}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];