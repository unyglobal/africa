// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre","repository":"africa","path":"burkina-faso/centre","depth":2,"parent":"burkina-faso","children":["nioko-i","ouagadougou","saaba","saonre","zinguedesse"]});
export const childModules = Object.freeze({"nioko-i":"./nioko-i/nioko-i.js","ouagadougou":"./ouagadougou/ouagadougou.js","saaba":"./saaba/saaba.js","saonre":"./saonre/saonre.js","zinguedesse":"./zinguedesse/zinguedesse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
