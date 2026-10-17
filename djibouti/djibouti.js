// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"djibouti","repository":"africa","path":"djibouti","depth":1,"parent":"","children":["ali-sabieh","arta","dikhil","djibouti","obock","tadjourah"]});
export const childModules = Object.freeze({"ali-sabieh":"./ali-sabieh/ali-sabieh.js","arta":"./arta/arta.js","dikhil":"./dikhil/dikhil.js","djibouti":"./djibouti/djibouti.js","obock":"./obock/obock.js","tadjourah":"./tadjourah/tadjourah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
