function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "flex: 0 0 var(--sizebar-width);background: #fff;margin-top: 7px;}.active" + shadowSelector + " {background-color: var(--primary-color-blue);color: white;}nav.nav" + shadowSelector + " ul.nav__list" + shadowSelector + " {background-color: #f6f4f4;border-radius: 5px;margin-top: 5px;}.nav" + shadowSelector + " ul" + shadowSelector + ",.nav" + shadowSelector + " li" + shadowSelector + " {list-style: none;margin: 0;padding: 0;}ul" + shadowSelector + " {margin: 0;}.nav" + shadowSelector + " input" + shadowSelector + " {display: none;}.nav" + shadowSelector + " label" + shadowSelector + " {margin: 0;cursor: pointer;font-weight: 300;line-height: 0.8rem;font-size: 1.4rem;color: #111;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}.nav" + shadowSelector + " a" + shadowSelector + " {display: block;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;color: #333;padding: 2rem;text-decoration: var(--text-decoration);}.nav" + shadowSelector + " li.active" + shadowSelector + " a" + shadowSelector + " {color: white;}input" + shadowSelector + " {box-sizing: border-box;padding: 0;margin-bottom: 1.5rem;line-height: normal;color: inherit;font: inherit;margin: 0;}@media screen and (max-width: 52rem) {" + ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "display: none;}}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];