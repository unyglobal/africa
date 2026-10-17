// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oudtshoorn","repository":"africa","path":"south-africa/western-cape/oudtshoorn","depth":3,"parent":"south-africa/western-cape","children":["wesbank"]});
export const childModules = Object.freeze({"wesbank":"./wesbank/wesbank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
