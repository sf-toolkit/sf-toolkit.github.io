function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "text-align: left;}.description" + shadowSelector + " {color: #706e6b;}a" + shadowSelector + " {color: var(--color-text-link);text-decoration: var(--text-decoration);}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];