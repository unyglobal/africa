// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"machakos-county","repository":"africa","path":"kenya/machakos-county","depth":2,"parent":"kenya","children":["athi-river","kinoi","machakos","mlolongo","mwala"]});
export const childModules = Object.freeze({"athi-river":"./athi-river/athi-river.js","kinoi":"./kinoi/kinoi.js","machakos":"./machakos/machakos.js","mlolongo":"./mlolongo/mlolongo.js","mwala":"./mwala/mwala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
