// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-province","repository":"africa","path":"zambia/western-province","depth":2,"parent":"zambia","children":["kalabo","kaoma","lukulu","mongu","senanga","sesheke"]});
export const childModules = Object.freeze({"kalabo":"./kalabo/kalabo.js","kaoma":"./kaoma/kaoma.js","lukulu":"./lukulu/lukulu.js","mongu":"./mongu/mongu.js","senanga":"./senanga/senanga.js","sesheke":"./sesheke/sesheke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
