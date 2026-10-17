// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fitovinany-region","repository":"africa","path":"madagascar/fitovinany-region","depth":2,"parent":"madagascar","children":["amboanjo","ikongo","manakara","vohipeno"]});
export const childModules = Object.freeze({"amboanjo":"./amboanjo/amboanjo.js","ikongo":"./ikongo/ikongo.js","manakara":"./manakara/manakara.js","vohipeno":"./vohipeno/vohipeno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
