// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oulad-teima","repository":"africa","path":"morocco/souss-massa/oulad-teima","depth":3,"parent":"morocco/souss-massa","children":["dar-caid"]});
export const childModules = Object.freeze({"dar-caid":"./dar-caid/dar-caid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
