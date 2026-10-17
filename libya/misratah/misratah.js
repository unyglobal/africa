// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"misratah","repository":"africa","path":"libya/misratah","depth":2,"parent":"libya","children":["bani-walid","zliten"]});
export const childModules = Object.freeze({"bani-walid":"./bani-walid/bani-walid.js","zliten":"./zliten/zliten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
