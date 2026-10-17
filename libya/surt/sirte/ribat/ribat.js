// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ribat","repository":"africa","path":"libya/surt/sirte/ribat","depth":4,"parent":"libya/surt/sirte","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
