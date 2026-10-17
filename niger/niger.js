// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niger","repository":"africa","path":"niger","depth":1,"parent":"","children":["agadez","diffa","dosso-region","maradi-region","niamey","tahoua-region","tillaberi-region","zinder-region"]});
export const childModules = Object.freeze({"agadez":"./agadez/agadez.js","diffa":"./diffa/diffa.js","dosso-region":"./dosso-region/dosso-region.js","maradi-region":"./maradi-region/maradi-region.js","niamey":"./niamey/niamey.js","tahoua-region":"./tahoua-region/tahoua-region.js","tillaberi-region":"./tillaberi-region/tillaberi-region.js","zinder-region":"./zinder-region/zinder-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
