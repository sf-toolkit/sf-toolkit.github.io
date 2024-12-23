function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "button" + shadowSelector + " {font-size: 0.9em;padding: 4px 8px;background-color: var(--button-color-bg);border: none;color: white;padding: 10px 10px;min-width: 100px;text-align: center;text-decoration: var(--text-decoration);display: inline-block;}button:hover" + shadowSelector + " {background-color: var(--button-color-bg-active);}button:focus" + shadowSelector + " {outline: 0;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];