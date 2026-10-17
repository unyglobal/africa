// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lang-ata","repository":"africa","path":"kenya/nairobi-county/lang-ata","depth":3,"parent":"kenya/nairobi-county","children":["hardy"]});
export const childModules = Object.freeze({"hardy":"./hardy/hardy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
