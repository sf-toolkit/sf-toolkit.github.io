function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "svg.d3" + shadowSelector + " .links" + shadowSelector + " line" + shadowSelector + " {stroke: rgb(221, 219, 218);}svg.d3" + shadowSelector + " .nodes" + shadowSelector + " circle" + shadowSelector + " {stroke: #fff;stroke-width: 1.5px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];