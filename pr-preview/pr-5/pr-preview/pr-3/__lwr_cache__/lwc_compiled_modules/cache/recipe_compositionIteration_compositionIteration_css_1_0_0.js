function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "recipe-contact-tile" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 0 12px;}recipe-contact-tile" + shadowSelector + ":before {content: 'recipe-contact-tile';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];