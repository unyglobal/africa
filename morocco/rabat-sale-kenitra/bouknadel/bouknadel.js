// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bouknadel","repository":"africa","path":"morocco/rabat-sale-kenitra/bouknadel","depth":3,"parent":"morocco/rabat-sale-kenitra","children":["hay-louifaq"]});
export const childModules = Object.freeze({"hay-louifaq":"./hay-louifaq/hay-louifaq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
