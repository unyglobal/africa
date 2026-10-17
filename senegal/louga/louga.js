// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"louga","repository":"africa","path":"senegal/louga","depth":2,"parent":"senegal","children":["dara","kebemer","linguere","ndibene-dahra"]});
export const childModules = Object.freeze({"dara":"./dara/dara.js","kebemer":"./kebemer/kebemer.js","linguere":"./linguere/linguere.js","ndibene-dahra":"./ndibene-dahra/ndibene-dahra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
