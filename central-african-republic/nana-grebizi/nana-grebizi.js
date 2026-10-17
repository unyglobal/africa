// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nana-grebizi","repository":"africa","path":"central-african-republic/nana-grebizi","depth":2,"parent":"central-african-republic","children":["kaga-bandoro"]});
export const childModules = Object.freeze({"kaga-bandoro":"./kaga-bandoro/kaga-bandoro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
