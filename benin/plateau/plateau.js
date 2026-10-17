// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plateau","repository":"africa","path":"benin/plateau","depth":2,"parent":"benin","children":["adjaouere","banigbe","ketou","pobe","sakete"]});
export const childModules = Object.freeze({"adjaouere":"./adjaouere/adjaouere.js","banigbe":"./banigbe/banigbe.js","ketou":"./ketou/ketou.js","pobe":"./pobe/pobe.js","sakete":"./sakete/sakete.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
