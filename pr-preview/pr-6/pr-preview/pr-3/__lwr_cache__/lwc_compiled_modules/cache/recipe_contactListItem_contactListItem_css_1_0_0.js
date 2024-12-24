function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "width: 300px;}a" + shadowSelector + " {display: flex;margin-left: 6px;text-decoration: var(--text-decoration);color: var(--color-text-link);}p" + shadowSelector + " {margin: 0 0 8px 6px;}img" + shadowSelector + " {width: 30px;height: 30px;border-radius: 50%;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];