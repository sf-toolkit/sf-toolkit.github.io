function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "ul" + shadowSelector + " {list-style: none;padding: 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];