// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oueme","repository":"africa","path":"benin/oueme","depth":2,"parent":"benin","children":["adjarra","avrankou","ekpe","misserete","porto-novo","semi"]});
export const childModules = Object.freeze({"adjarra":"./adjarra/adjarra.js","avrankou":"./avrankou/avrankou.js","ekpe":"./ekpe/ekpe.js","misserete":"./misserete/misserete.js","porto-novo":"./porto-novo/porto-novo.js","semi":"./semi/semi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
