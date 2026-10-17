// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"warrap","repository":"africa","path":"south-sudan/warrap","depth":2,"parent":"south-sudan","children":["gogrial","kuacjok","tonj"]});
export const childModules = Object.freeze({"gogrial":"./gogrial/gogrial.js","kuacjok":"./kuacjok/kuacjok.js","tonj":"./tonj/tonj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
