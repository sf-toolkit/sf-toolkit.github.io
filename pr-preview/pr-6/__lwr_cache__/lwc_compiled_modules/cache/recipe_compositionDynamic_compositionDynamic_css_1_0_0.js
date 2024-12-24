function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".dynamic-component" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;padding: 14px 8px 8px 8px;margin-top: 26px;}.dynamic-component" + shadowSelector + ":before {content: 'The component will be loaded here';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];