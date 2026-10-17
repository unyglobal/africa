// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zou","repository":"africa","path":"benin/zou","depth":2,"parent":"benin","children":["abomey","bohicon","cove","djidja","kpozoun","ouinhi"]});
export const childModules = Object.freeze({"abomey":"./abomey/abomey.js","bohicon":"./bohicon/bohicon.js","cove":"./cove/cove.js","djidja":"./djidja/djidja.js","kpozoun":"./kpozoun/kpozoun.js","ouinhi":"./ouinhi/ouinhi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
