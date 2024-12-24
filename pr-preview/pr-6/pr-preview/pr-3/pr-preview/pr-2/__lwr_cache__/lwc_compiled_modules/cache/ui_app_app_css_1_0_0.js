function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "display: block;overflow: hidden;position: relative;width: 100%;}section" + shadowSelector + " {max-width: 1200px;margin: 0 auto;display: flex;margin-top: 2px;}article.container" + shadowSelector + " {margin-bottom: 24px;}@media (max-width: 380px) {article.container" + shadowSelector + " {margin-bottom: 34px;}}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];