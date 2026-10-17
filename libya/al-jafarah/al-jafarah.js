// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jafarah","repository":"africa","path":"libya/al-jafarah","depth":2,"parent":"libya","children":["al-aziziyah","an-nasiriyah","as-sawani","az-zahra","janzur"]});
export const childModules = Object.freeze({"al-aziziyah":"./al-aziziyah/al-aziziyah.js","an-nasiriyah":"./an-nasiriyah/an-nasiriyah.js","as-sawani":"./as-sawani/as-sawani.js","az-zahra":"./az-zahra/az-zahra.js","janzur":"./janzur/janzur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
