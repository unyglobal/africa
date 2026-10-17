// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monrovia","repository":"africa","path":"liberia/montserrado-county/monrovia","depth":3,"parent":"liberia/montserrado-county","children":["bassa-community","capitol-hill","jallah-town"]});
export const childModules = Object.freeze({"bassa-community":"./bassa-community/bassa-community.js","capitol-hill":"./capitol-hill/capitol-hill.js","jallah-town":"./jallah-town/jallah-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
