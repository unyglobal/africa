// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trarza","repository":"africa","path":"mauritania/trarza","depth":2,"parent":"mauritania","children":["boutilimitt","rosso","tekane"]});
export const childModules = Object.freeze({"boutilimitt":"./boutilimitt/boutilimitt.js","rosso":"./rosso/rosso.js","tekane":"./tekane/tekane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
