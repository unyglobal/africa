// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moutsamoudou","repository":"africa","path":"comoros/anjouan/moutsamoudou","depth":3,"parent":"comoros/anjouan","children":["goungouamoue"]});
export const childModules = Object.freeze({"goungouamoue":"./goungouamoue/goungouamoue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
