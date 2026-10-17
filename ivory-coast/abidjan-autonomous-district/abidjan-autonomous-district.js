// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abidjan-autonomous-district","repository":"africa","path":"ivory-coast/abidjan-autonomous-district","depth":2,"parent":"ivory-coast","children":["abidjan","abobo","anyama","bingerville","koumassi","marcory"]});
export const childModules = Object.freeze({"abidjan":"./abidjan/abidjan.js","abobo":"./abobo/abobo.js","anyama":"./anyama/anyama.js","bingerville":"./bingerville/bingerville.js","koumassi":"./koumassi/koumassi.js","marcory":"./marcory/marcory.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
