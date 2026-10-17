// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"an-nuqat-al-khams","repository":"africa","path":"libya/an-nuqat-al-khams","depth":2,"parent":"libya","children":["al-ajaylat","al-jumayl","sidi-bin-zinah","zuwarah"]});
export const childModules = Object.freeze({"al-ajaylat":"./al-ajaylat/al-ajaylat.js","al-jumayl":"./al-jumayl/al-jumayl.js","sidi-bin-zinah":"./sidi-bin-zinah/sidi-bin-zinah.js","zuwarah":"./zuwarah/zuwarah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
