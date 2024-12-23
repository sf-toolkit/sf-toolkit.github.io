function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "img" + shadowSelector + " {width: 80px;height: 80px;border-radius: 50%;margin-bottom: 8px;}recipe-contact-list-item" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item" + shadowSelector + ":before {content: 'recipe-contact-list-item';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts" + shadowSelector + " {display: flex;}.contact-details" + shadowSelector + " {padding-left: 10px;display: block;max-width: 50%;}p" + shadowSelector + " {margin: 0;}@media (max-width: 400px) {.contact-details" + shadowSelector + " {padding-left: 10px;}}@media (max-width: 500px) {div.contacts" + shadowSelector + " {display: block;}}@media (max-width: 900px) {.contact-list" + shadowSelector + ", .contact-details" + shadowSelector + " {max-width: 100%;}}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];