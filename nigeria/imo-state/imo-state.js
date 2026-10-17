// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imo-state","repository":"africa","path":"nigeria/imo-state","depth":2,"parent":"nigeria","children":["nkwerre","oguta","okigwe","owerri"]});
export const childModules = Object.freeze({"nkwerre":"./nkwerre/nkwerre.js","oguta":"./oguta/oguta.js","okigwe":"./okigwe/okigwe.js","owerri":"./owerri/owerri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
