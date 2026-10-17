// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moyen-ogooue","repository":"africa","path":"gabon/moyen-ogooue","depth":2,"parent":"gabon","children":["lambarene","oyam"]});
export const childModules = Object.freeze({"lambarene":"./lambarene/lambarene.js","oyam":"./oyam/oyam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
