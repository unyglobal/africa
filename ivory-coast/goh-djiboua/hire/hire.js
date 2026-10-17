// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hire","repository":"africa","path":"ivory-coast/goh-djiboua/hire","depth":3,"parent":"ivory-coast/goh-djiboua","children":["hire-baoule","hire-ouatta"]});
export const childModules = Object.freeze({"hire-baoule":"./hire-baoule/hire-baoule.js","hire-ouatta":"./hire-ouatta/hire-ouatta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
