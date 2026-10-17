// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isiolo-county","repository":"africa","path":"kenya/isiolo-county","depth":2,"parent":"kenya","children":["garba-tula","isiolo"]});
export const childModules = Object.freeze({"garba-tula":"./garba-tula/garba-tula.js","isiolo":"./isiolo/isiolo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
