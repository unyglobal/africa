// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaire","repository":"africa","path":"angola/zaire","depth":2,"parent":"angola","children":["cuimba","mbanza-kongo","n-zeto","soyo","tomboco"]});
export const childModules = Object.freeze({"cuimba":"./cuimba/cuimba.js","mbanza-kongo":"./mbanza-kongo/mbanza-kongo.js","n-zeto":"./n-zeto/n-zeto.js","soyo":"./soyo/soyo.js","tomboco":"./tomboco/tomboco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
