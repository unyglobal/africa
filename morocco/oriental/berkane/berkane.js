// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berkane","repository":"africa","path":"morocco/oriental/berkane","depth":3,"parent":"morocco/oriental","children":["hay-palestine"]});
export const childModules = Object.freeze({"hay-palestine":"./hay-palestine/hay-palestine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
