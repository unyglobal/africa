// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pikine","repository":"africa","path":"senegal/dakar/pikine","depth":3,"parent":"senegal/dakar","children":["cite-pepiniere"]});
export const childModules = Object.freeze({"cite-pepiniere":"./cite-pepiniere/cite-pepiniere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
