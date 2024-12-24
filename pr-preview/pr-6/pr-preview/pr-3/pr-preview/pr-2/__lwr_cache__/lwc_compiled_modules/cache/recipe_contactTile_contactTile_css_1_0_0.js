function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "padding: 16px;}img" + shadowSelector + " {margin-top: 20px;width: 60px;height: 60px;border-radius: 50%;}p" + shadowSelector + " {margin: 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];