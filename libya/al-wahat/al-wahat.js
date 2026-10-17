// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-wahat","repository":"africa","path":"libya/al-wahat","depth":2,"parent":"libya","children":["ajdabiya","al-burayqah","az-zuwaytinah"]});
export const childModules = Object.freeze({"ajdabiya":"./ajdabiya/ajdabiya.js","al-burayqah":"./al-burayqah/al-burayqah.js","az-zuwaytinah":"./az-zuwaytinah/az-zuwaytinah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
