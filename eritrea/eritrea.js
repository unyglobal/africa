// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eritrea","repository":"africa","path":"eritrea","depth":1,"parent":"","children":["anseba","debub","gash-barka","maekel","northern-red-sea","southern-red-sea"]});
export const childModules = Object.freeze({"anseba":"./anseba/anseba.js","debub":"./debub/debub.js","gash-barka":"./gash-barka/gash-barka.js","maekel":"./maekel/maekel.js","northern-red-sea":"./northern-red-sea/northern-red-sea.js","southern-red-sea":"./southern-red-sea/southern-red-sea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
