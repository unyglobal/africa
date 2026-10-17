// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"souk-et-tnine-jorf-el-mellah","repository":"africa","path":"morocco/rabat-sale-kenitra/souk-et-tnine-jorf-el-mellah","depth":3,"parent":"morocco/rabat-sale-kenitra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
