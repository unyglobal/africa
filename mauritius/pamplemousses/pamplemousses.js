// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pamplemousses","repository":"africa","path":"mauritius/pamplemousses","depth":2,"parent":"mauritius","children":["baie-du-tombeau","le-hochet","triolet"]});
export const childModules = Object.freeze({"baie-du-tombeau":"./baie-du-tombeau/baie-du-tombeau.js","le-hochet":"./le-hochet/le-hochet.js","triolet":"./triolet/triolet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
