function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".text-body_regular" + shadowSelector + " {font-size: 13px;margin: 0px 0px 12px 0px;}a" + shadowSelector + " {color: #006dcc;text-decoration: none;transition: color 0.1s linear;font-size: 13px;cursor: pointer;}a:hover" + shadowSelector + ",a:focus" + shadowSelector + " {text-decoration: underline;color: #005fb2;}.text-color_destructive" + shadowSelector + " {color: #c23934;}.m-vertical_small" + shadowSelector + " {margin-top: 12px;margin-bottom: 12px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];