// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benue-state","repository":"africa","path":"nigeria/benue-state","depth":2,"parent":"nigeria","children":["gboko","igbor","katsina-ala","makurdi","otukpa","takum"]});
export const childModules = Object.freeze({"gboko":"./gboko/gboko.js","igbor":"./igbor/igbor.js","katsina-ala":"./katsina-ala/katsina-ala.js","makurdi":"./makurdi/makurdi.js","otukpa":"./otukpa/otukpa.js","takum":"./takum/takum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
