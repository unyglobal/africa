// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-shabeelle","repository":"africa","path":"somalia/lower-shabeelle","depth":2,"parent":"somalia","children":["afgooye","marka","qoryooley","wanlaweyn"]});
export const childModules = Object.freeze({"afgooye":"./afgooye/afgooye.js","marka":"./marka/marka.js","qoryooley":"./qoryooley/qoryooley.js","wanlaweyn":"./wanlaweyn/wanlaweyn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
