// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borgou","repository":"africa","path":"benin/borgou","depth":2,"parent":"benin","children":["bembereke","kalale","ndali","nikki","parakou","perere","sinende","tchaourou"]});
export const childModules = Object.freeze({"bembereke":"./bembereke/bembereke.js","kalale":"./kalale/kalale.js","ndali":"./ndali/ndali.js","nikki":"./nikki/nikki.js","parakou":"./parakou/parakou.js","perere":"./perere/perere.js","sinende":"./sinende/sinende.js","tchaourou":"./tchaourou/tchaourou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
