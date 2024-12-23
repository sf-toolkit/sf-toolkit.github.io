function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".unscoped" + shadowSelector + " {background: rgb(252, 219, 225);}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];