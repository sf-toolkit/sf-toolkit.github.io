function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".margin-vertical-small" + shadowSelector + " {margin: 0 4 0 4;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];