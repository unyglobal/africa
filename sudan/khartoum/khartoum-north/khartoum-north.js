// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khartoum-north","repository":"africa","path":"sudan/khartoum/khartoum-north","depth":3,"parent":"sudan/khartoum","children":["al-mazad","al-safyia","shambat"]});
export const childModules = Object.freeze({"al-mazad":"./al-mazad/al-mazad.js","al-safyia":"./al-safyia/al-safyia.js","shambat":"./shambat/shambat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
