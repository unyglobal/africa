// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abia-state","repository":"africa","path":"nigeria/abia-state","depth":2,"parent":"nigeria","children":["aba","amaigbo","bende","ohafia-ifigh","umuahia"]});
export const childModules = Object.freeze({"aba":"./aba/aba.js","amaigbo":"./amaigbo/amaigbo.js","bende":"./bende/bende.js","ohafia-ifigh":"./ohafia-ifigh/ohafia-ifigh.js","umuahia":"./umuahia/umuahia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
