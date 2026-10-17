// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bauchi","repository":"africa","path":"nigeria/bauchi","depth":2,"parent":"nigeria","children":["azare","darazo","kari"]});
export const childModules = Object.freeze({"azare":"./azare/azare.js","darazo":"./darazo/darazo.js","kari":"./kari/kari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
