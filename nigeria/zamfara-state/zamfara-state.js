// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zamfara-state","repository":"africa","path":"nigeria/zamfara-state","depth":2,"parent":"nigeria","children":["gummi","gusau","kaura-namoda","moriki","talata-mafara"]});
export const childModules = Object.freeze({"gummi":"./gummi/gummi.js","gusau":"./gusau/gusau.js","kaura-namoda":"./kaura-namoda/kaura-namoda.js","moriki":"./moriki/moriki.js","talata-mafara":"./talata-mafara/talata-mafara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
