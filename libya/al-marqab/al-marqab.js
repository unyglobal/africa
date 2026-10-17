// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-marqab","repository":"africa","path":"libya/al-marqab","depth":2,"parent":"libya","children":["al-aluas","al-khums","msalatah","tarhuna"]});
export const childModules = Object.freeze({"al-aluas":"./al-aluas/al-aluas.js","al-khums":"./al-khums/al-khums.js","msalatah":"./msalatah/msalatah.js","tarhuna":"./tarhuna/tarhuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
