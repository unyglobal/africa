// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ahafo","repository":"africa","path":"ghana/ahafo","depth":2,"parent":"ghana","children":["bechem","duayaw-nkwanta","goaso","mim"]});
export const childModules = Object.freeze({"bechem":"./bechem/bechem.js","duayaw-nkwanta":"./duayaw-nkwanta/duayaw-nkwanta.js","goaso":"./goaso/goaso.js","mim":"./mim/mim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
