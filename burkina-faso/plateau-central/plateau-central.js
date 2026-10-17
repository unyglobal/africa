// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plateau-central","repository":"africa","path":"burkina-faso/plateau-central","depth":2,"parent":"burkina-faso","children":["barogo","bousse","mogtedo","ziniare","zorgo"]});
export const childModules = Object.freeze({"barogo":"./barogo/barogo.js","bousse":"./bousse/bousse.js","mogtedo":"./mogtedo/mogtedo.js","ziniare":"./ziniare/ziniare.js","zorgo":"./zorgo/zorgo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
