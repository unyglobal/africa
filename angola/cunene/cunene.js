// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cunene","repository":"africa","path":"angola/cunene","depth":2,"parent":"angola","children":["cahama","humbe","ondjiva","xangongo"]});
export const childModules = Object.freeze({"cahama":"./cahama/cahama.js","humbe":"./humbe/humbe.js","ondjiva":"./ondjiva/ondjiva.js","xangongo":"./xangongo/xangongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
