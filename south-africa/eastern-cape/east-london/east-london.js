// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-london","repository":"africa","path":"south-africa/eastern-cape/east-london","depth":3,"parent":"south-africa/eastern-cape","children":["arcadia","quigney"]});
export const childModules = Object.freeze({"arcadia":"./arcadia/arcadia.js","quigney":"./quigney/quigney.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
