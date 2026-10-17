// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mayo-kebbi-est","repository":"africa","path":"chad/mayo-kebbi-est","depth":2,"parent":"chad","children":["bongor","fianga","gounou-gaya","guelendeng"]});
export const childModules = Object.freeze({"bongor":"./bongor/bongor.js","fianga":"./fianga/fianga.js","gounou-gaya":"./gounou-gaya/gounou-gaya.js","guelendeng":"./guelendeng/guelendeng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
