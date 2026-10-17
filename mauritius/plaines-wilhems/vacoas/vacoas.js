// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vacoas","repository":"africa","path":"mauritius/plaines-wilhems/vacoas","depth":3,"parent":"mauritius/plaines-wilhems","children":["la-caverne","quinze-cantons"]});
export const childModules = Object.freeze({"la-caverne":"./la-caverne/la-caverne.js","quinze-cantons":"./quinze-cantons/quinze-cantons.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
