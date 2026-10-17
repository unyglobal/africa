// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matabeleland-south-province","repository":"africa","path":"zimbabwe/matabeleland-south-province","depth":2,"parent":"zimbabwe","children":["beitbridge","gwanda"]});
export const childModules = Object.freeze({"beitbridge":"./beitbridge/beitbridge.js","gwanda":"./gwanda/gwanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
