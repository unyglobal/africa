// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"menabe","repository":"africa","path":"madagascar/menabe","depth":2,"parent":"madagascar","children":["belo-sur-tsiribihina","miandrivazo","morondava"]});
export const childModules = Object.freeze({"belo-sur-tsiribihina":"./belo-sur-tsiribihina/belo-sur-tsiribihina.js","miandrivazo":"./miandrivazo/miandrivazo.js","morondava":"./morondava/morondava.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
