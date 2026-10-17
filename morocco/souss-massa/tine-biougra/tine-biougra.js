// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tine-biougra","repository":"africa","path":"morocco/souss-massa/tine-biougra","depth":3,"parent":"morocco/souss-massa","children":["derb-gnaoua","derb-tine-biougra"]});
export const childModules = Object.freeze({"derb-gnaoua":"./derb-gnaoua/derb-gnaoua.js","derb-tine-biougra":"./derb-tine-biougra/derb-tine-biougra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
