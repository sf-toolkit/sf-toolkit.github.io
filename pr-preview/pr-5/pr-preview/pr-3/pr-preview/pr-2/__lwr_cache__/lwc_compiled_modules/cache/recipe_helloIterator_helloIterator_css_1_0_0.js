function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".list-first" + shadowSelector + " {border-top: 1px solid #706e6b;padding-top: 5px;}.list-last" + shadowSelector + " {border-bottom: 1px solid #706e6b;padding-bottom: 5px;}ul" + shadowSelector + " {list-style: none;padding: 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];