// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hadjer-lamis","repository":"africa","path":"chad/hadjer-lamis","depth":2,"parent":"chad","children":["bokoro","massaguet","massakory"]});
export const childModules = Object.freeze({"bokoro":"./bokoro/bokoro.js","massaguet":"./massaguet/massaguet.js","massakory":"./massakory/massakory.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
