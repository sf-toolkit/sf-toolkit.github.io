function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".margin-top-medium" + shadowSelector + " {margin: 8 0 0 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];