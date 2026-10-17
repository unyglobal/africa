// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soweto","repository":"africa","path":"south-africa/gauteng/soweto","depth":3,"parent":"south-africa/gauteng","children":["molapo","senaoane"]});
export const childModules = Object.freeze({"molapo":"./molapo/molapo.js","senaoane":"./senaoane/senaoane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
