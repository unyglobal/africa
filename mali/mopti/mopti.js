// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mopti","repository":"africa","path":"mali/mopti","depth":2,"parent":"mali","children":["bandiagara","bankass","djenne","douentza","koro"]});
export const childModules = Object.freeze({"bandiagara":"./bandiagara/bandiagara.js","bankass":"./bankass/bankass.js","djenne":"./djenne/djenne.js","douentza":"./douentza/douentza.js","koro":"./koro/koro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
