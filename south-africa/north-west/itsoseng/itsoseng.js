// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itsoseng","repository":"africa","path":"south-africa/north-west/itsoseng","depth":3,"parent":"south-africa/north-west","children":["itsoseng-unit-1","itsoseng-unit-3"]});
export const childModules = Object.freeze({"itsoseng-unit-1":"./itsoseng-unit-1/itsoseng-unit-1.js","itsoseng-unit-3":"./itsoseng-unit-3/itsoseng-unit-3.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
