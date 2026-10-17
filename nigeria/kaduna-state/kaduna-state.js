// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaduna-state","repository":"africa","path":"nigeria/kaduna-state","depth":2,"parent":"nigeria","children":["anchau","dutsen-wai","kachia","kaduna","kafanchan","kagoro","lere","soba","sofo-birnin-gwari","zaria"]});
export const childModules = Object.freeze({"anchau":"./anchau/anchau.js","dutsen-wai":"./dutsen-wai/dutsen-wai.js","kachia":"./kachia/kachia.js","kaduna":"./kaduna/kaduna.js","kafanchan":"./kafanchan/kafanchan.js","kagoro":"./kagoro/kagoro.js","lere":"./lere/lere.js","soba":"./soba/soba.js","sofo-birnin-gwari":"./sofo-birnin-gwari/sofo-birnin-gwari.js","zaria":"./zaria/zaria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
