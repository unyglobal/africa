// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kie-ntem","repository":"africa","path":"equatorial-guinea/kie-ntem","depth":2,"parent":"equatorial-guinea","children":["ebebiyin"]});
export const childModules = Object.freeze({"ebebiyin":"./ebebiyin/ebebiyin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
