// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-east","repository":"africa","path":"botswana/south-east","depth":2,"parent":"botswana","children":["janeng","ramotswa","tlokweng"]});
export const childModules = Object.freeze({"janeng":"./janeng/janeng.js","ramotswa":"./ramotswa/ramotswa.js","tlokweng":"./tlokweng/tlokweng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
