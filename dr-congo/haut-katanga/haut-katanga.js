// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haut-katanga","repository":"africa","path":"dr-congo/haut-katanga","depth":2,"parent":"dr-congo","children":["kambove","kipushi","likasi","lubumbashi","mokambo","pweto"]});
export const childModules = Object.freeze({"kambove":"./kambove/kambove.js","kipushi":"./kipushi/kipushi.js","likasi":"./likasi/likasi.js","lubumbashi":"./lubumbashi/lubumbashi.js","mokambo":"./mokambo/mokambo.js","pweto":"./pweto/pweto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
