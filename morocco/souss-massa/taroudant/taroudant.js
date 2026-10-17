// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taroudant","repository":"africa","path":"morocco/souss-massa/taroudant","depth":3,"parent":"morocco/souss-massa","children":["mellah"]});
export const childModules = Object.freeze({"mellah":"./mellah/mellah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
