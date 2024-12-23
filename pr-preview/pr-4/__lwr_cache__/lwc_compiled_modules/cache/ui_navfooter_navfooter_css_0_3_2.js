function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "a" + shadowSelector + " {text-decoration: var(--text-decoration);color: var(--color-text-link);}.next" + shadowSelector + " {float: right;margin-right: 10px;}.previous" + shadowSelector + " {margin-left: 10px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];