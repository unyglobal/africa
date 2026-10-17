// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"collines","repository":"africa","path":"benin/collines","depth":2,"parent":"benin","children":["bante","come","dassa-zoume","glazoue","ouesse","savalou","save"]});
export const childModules = Object.freeze({"bante":"./bante/bante.js","come":"./come/come.js","dassa-zoume":"./dassa-zoume/dassa-zoume.js","glazoue":"./glazoue/glazoue.js","ouesse":"./ouesse/ouesse.js","savalou":"./savalou/savalou.js","save":"./save/save.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
