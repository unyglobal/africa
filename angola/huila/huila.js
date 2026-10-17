// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huila","repository":"africa","path":"angola/huila","depth":2,"parent":"angola","children":["caluquembe","lubango","matala","quipungo"]});
export const childModules = Object.freeze({"caluquembe":"./caluquembe/caluquembe.js","lubango":"./lubango/lubango.js","matala":"./matala/matala.js","quipungo":"./quipungo/quipungo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
