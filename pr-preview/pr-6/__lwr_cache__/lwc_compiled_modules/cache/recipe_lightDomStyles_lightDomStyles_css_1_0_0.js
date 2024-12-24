function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "p" + shadowSelector + " {background: yellow;}div" + shadowSelector + " {margin-bottom: 15px;}recipe-light-dom-styles-child" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;padding: 0 12px;margin-top: 25px;}recipe-light-dom-styles-child" + shadowSelector + ":before {content: 'recipe-light-dom-styles-child';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];