function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".field-label" + shadowSelector + " {font-size: 1.4rem;color: gray;display: block;}select" + shadowSelector + " {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 178px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}";
  /*LWC compiler v6.5.0*/
}
export default [stylesheet];