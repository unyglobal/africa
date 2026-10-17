// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pretoria","repository":"africa","path":"south-africa/gauteng/pretoria","depth":3,"parent":"south-africa/gauteng","children":["pretoria-central"]});
export const childModules = Object.freeze({"pretoria-central":"./pretoria-central/pretoria-central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
