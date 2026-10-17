// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mossel-bay","repository":"africa","path":"south-africa/western-cape/mossel-bay","depth":3,"parent":"south-africa/western-cape","children":["linkside"]});
export const childModules = Object.freeze({"linkside":"./linkside/linkside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
