// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banghazi","repository":"africa","path":"libya/banghazi","depth":2,"parent":"libya","children":["benghazi","qaryat-suluq"]});
export const childModules = Object.freeze({"benghazi":"./benghazi/benghazi.js","qaryat-suluq":"./qaryat-suluq/qaryat-suluq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
