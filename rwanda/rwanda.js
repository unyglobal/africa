// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rwanda","repository":"africa","path":"rwanda","depth":1,"parent":"","children":["eastern-province","kigali","northern-province","southern-province","western-province"]});
export const childModules = Object.freeze({"eastern-province":"./eastern-province/eastern-province.js","kigali":"./kigali/kigali.js","northern-province":"./northern-province/northern-province.js","southern-province":"./southern-province/southern-province.js","western-province":"./western-province/western-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
