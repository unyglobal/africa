// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"midrand","repository":"africa","path":"south-africa/gauteng/midrand","depth":3,"parent":"south-africa/gauteng","children":["erand"]});
export const childModules = Object.freeze({"erand":"./erand/erand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
