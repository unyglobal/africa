// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"germiston","repository":"africa","path":"south-africa/gauteng/germiston","depth":3,"parent":"south-africa/gauteng","children":["dinwiddie"]});
export const childModules = Object.freeze({"dinwiddie":"./dinwiddie/dinwiddie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
