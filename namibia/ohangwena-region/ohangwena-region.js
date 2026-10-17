// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ohangwena-region","repository":"africa","path":"namibia/ohangwena-region","depth":2,"parent":"namibia","children":["helao-nafidi"]});
export const childModules = Object.freeze({"helao-nafidi":"./helao-nafidi/helao-nafidi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
