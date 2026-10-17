// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"touggourt","repository":"africa","path":"algeria/touggourt","depth":2,"parent":"algeria","children":["megarine","taibet","tebesbest"]});
export const childModules = Object.freeze({"megarine":"./megarine/megarine.js","taibet":"./taibet/taibet.js","tebesbest":"./tebesbest/tebesbest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
