// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tanga","repository":"africa","path":"tanzania/tanga","depth":2,"parent":"tanzania","children":["chanika","handeni","korogwe","lushoto","maramba","matui","mazinde","mlalo","muheza"]});
export const childModules = Object.freeze({"chanika":"./chanika/chanika.js","handeni":"./handeni/handeni.js","korogwe":"./korogwe/korogwe.js","lushoto":"./lushoto/lushoto.js","maramba":"./maramba/maramba.js","matui":"./matui/matui.js","mazinde":"./mazinde/mazinde.js","mlalo":"./mlalo/mlalo.js","muheza":"./muheza/muheza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
