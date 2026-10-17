// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trichardt","repository":"africa","path":"south-africa/mpumalanga/trichardt","depth":3,"parent":"south-africa/mpumalanga","children":["secunda-exit-6"]});
export const childModules = Object.freeze({"secunda-exit-6":"./secunda-exit-6/secunda-exit-6.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
