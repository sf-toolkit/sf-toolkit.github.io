function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".illustration" + shadowSelector + " {text-align: center;}.illustration.illustration_small" + shadowSelector + " .illustration__svg" + shadowSelector + " {width: 100%;max-width: 300px;max-height: 200px;margin-bottom: 12px;}.illustration__stroke-primary" + shadowSelector + " {stroke: #8cd2f8;}.illustration__stroke-secondary" + shadowSelector + " {stroke: #c2e8ff;}.illustration__fill-secondary" + shadowSelector + " {fill: #c2e8ff;}.text-heading_medium" + shadowSelector + " {font-weight: 300;font-size: 20px;line-height: 1.25;margin: 0px 0px 12px 0px;}.text-body_regular" + shadowSelector + " {font-size: 13px;margin: 0px 0px 12px 0px;}a" + shadowSelector + " {color: #006dcc;text-decoration: none;transition: color 0.1s linear;font-size: 13px;cursor: pointer;}a:hover" + shadowSelector + ",a:focus" + shadowSelector + " {text-decoration: underline;color: #005fb2;}.m-vertical_small" + shadowSelector + " {margin-top: 12px;margin-bottom: 12px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];