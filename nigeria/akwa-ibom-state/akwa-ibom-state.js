// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akwa-ibom-state","repository":"africa","path":"nigeria/akwa-ibom-state","depth":2,"parent":"nigeria","children":["eket","esuk-oron","ikot-ekpene","itu","uyo"]});
export const childModules = Object.freeze({"eket":"./eket/eket.js","esuk-oron":"./esuk-oron/esuk-oron.js","ikot-ekpene":"./ikot-ekpene/ikot-ekpene.js","itu":"./itu/itu.js","uyo":"./uyo/uyo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
