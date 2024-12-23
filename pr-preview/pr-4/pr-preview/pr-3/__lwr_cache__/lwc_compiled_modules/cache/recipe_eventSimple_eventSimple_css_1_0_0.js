function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "recipe-paginator" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;padding: 14px 2px 2px 2px;}recipe-paginator" + shadowSelector + ":before {content: 'recipe-paginator';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}.center" + shadowSelector + " {text-align: center;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];