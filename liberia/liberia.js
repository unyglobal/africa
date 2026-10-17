// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"liberia","repository":"africa","path":"liberia","depth":1,"parent":"","children":["bomi-county","bong-county","grand-bassa-county","grand-gedeh-county","lofa-county","margibi-county","maryland-county","montserrado-county","nimba","sinoe-county"]});
export const childModules = Object.freeze({"bomi-county":"./bomi-county/bomi-county.js","bong-county":"./bong-county/bong-county.js","grand-bassa-county":"./grand-bassa-county/grand-bassa-county.js","grand-gedeh-county":"./grand-gedeh-county/grand-gedeh-county.js","lofa-county":"./lofa-county/lofa-county.js","margibi-county":"./margibi-county/margibi-county.js","maryland-county":"./maryland-county/maryland-county.js","montserrado-county":"./montserrado-county/montserrado-county.js","nimba":"./nimba/nimba.js","sinoe-county":"./sinoe-county/sinoe-county.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
