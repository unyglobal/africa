// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dakhla","repository":"africa","path":"morocco/souss-massa/dakhla","depth":3,"parent":"morocco/souss-massa","children":["douar-rja-fellah","extention-dakhla","lfiddiya","lqods"]});
export const childModules = Object.freeze({"douar-rja-fellah":"./douar-rja-fellah/douar-rja-fellah.js","extention-dakhla":"./extention-dakhla/extention-dakhla.js","lfiddiya":"./lfiddiya/lfiddiya.js","lqods":"./lqods/lqods.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
