// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cape-town","repository":"africa","path":"south-africa/western-cape/cape-town","depth":3,"parent":"south-africa/western-cape","children":["malay-quarter","schotschekloof"]});
export const childModules = Object.freeze({"malay-quarter":"./malay-quarter/malay-quarter.js","schotschekloof":"./schotschekloof/schotschekloof.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
