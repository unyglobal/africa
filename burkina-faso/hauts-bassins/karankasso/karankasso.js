// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karankasso","repository":"africa","path":"burkina-faso/hauts-bassins/karankasso","depth":3,"parent":"burkina-faso/hauts-bassins","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
