// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zinder-region","repository":"africa","path":"niger/zinder-region","depth":2,"parent":"niger","children":["goure","magaria","matamey","mirriah","tanout","zinder"]});
export const childModules = Object.freeze({"goure":"./goure/goure.js","magaria":"./magaria/magaria.js","matamey":"./matamey/matamey.js","mirriah":"./mirriah/mirriah.js","tanout":"./tanout/tanout.js","zinder":"./zinder/zinder.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
