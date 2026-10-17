// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ghardaia","repository":"africa","path":"algeria/ghardaia","depth":2,"parent":"algeria","children":["berriane","guerara","metlili-chaamba"]});
export const childModules = Object.freeze({"berriane":"./berriane/berriane.js","guerara":"./guerara/guerara.js","metlili-chaamba":"./metlili-chaamba/metlili-chaamba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
