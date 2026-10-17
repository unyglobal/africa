// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beaufort-west","repository":"africa","path":"south-africa/western-cape/beaufort-west","depth":3,"parent":"south-africa/western-cape","children":["nieuveld-park"]});
export const childModules = Object.freeze({"nieuveld-park":"./nieuveld-park/nieuveld-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
