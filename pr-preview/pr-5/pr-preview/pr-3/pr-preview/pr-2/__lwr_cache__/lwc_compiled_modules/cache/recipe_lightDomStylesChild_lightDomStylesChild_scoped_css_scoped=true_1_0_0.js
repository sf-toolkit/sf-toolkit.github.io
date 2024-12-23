function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("." + token) : "";
  var hostSelector = token ? ("." + token + "-host") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".scoped" + shadowSelector + " {background: rgb(212, 255, 195);}";
  /*LWC compiler v6.5.0*/
}
stylesheet.$scoped$ = true;
export default [stylesheet];