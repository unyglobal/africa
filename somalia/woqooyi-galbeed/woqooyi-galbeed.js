// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woqooyi-galbeed","repository":"africa","path":"somalia/woqooyi-galbeed","depth":2,"parent":"somalia","children":["berbera","gebiley","hargeysa","tog-wajaale"]});
export const childModules = Object.freeze({"berbera":"./berbera/berbera.js","gebiley":"./gebiley/gebiley.js","hargeysa":"./hargeysa/hargeysa.js","tog-wajaale":"./tog-wajaale/tog-wajaale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
