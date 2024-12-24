function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "li:not(:first-child)" + shadowSelector + " {border-top: solid 1px #ecebea;}ul" + shadowSelector + " {list-style: none;margin: 0;padding: 0;}li" + shadowSelector + " {padding-top: 4px;}p" + shadowSelector + " {margin: 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];