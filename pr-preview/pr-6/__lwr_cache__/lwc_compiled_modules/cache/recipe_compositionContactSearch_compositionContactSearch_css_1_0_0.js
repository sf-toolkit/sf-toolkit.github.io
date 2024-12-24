function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "recipe-contact-tile" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 8px 8px 8px;}recipe-contact-tile" + shadowSelector + ":before {color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;content: 'recipe-contact-tile';}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];