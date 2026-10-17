// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lotissement-gouchar","repository":"africa","path":"morocco/souss-massa/ait-melloul/lotissement-gouchar","depth":4,"parent":"morocco/souss-massa/ait-melloul","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
