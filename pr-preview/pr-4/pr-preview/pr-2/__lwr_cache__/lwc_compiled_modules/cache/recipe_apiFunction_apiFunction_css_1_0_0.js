function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "recipe-clock" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;padding: 14px 8px 8px 8px;margin-top: 16px;}recipe-clock" + shadowSelector + ":before {content: 'recipe-clock';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];