// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jendouba-governorate","repository":"africa","path":"tunisia/jendouba-governorate","depth":2,"parent":"tunisia","children":["ghardimaou","jendouba","tabarka"]});
export const childModules = Object.freeze({"ghardimaou":"./ghardimaou/ghardimaou.js","jendouba":"./jendouba/jendouba.js","tabarka":"./tabarka/tabarka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
