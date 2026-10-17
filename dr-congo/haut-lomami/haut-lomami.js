// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haut-lomami","repository":"africa","path":"dr-congo/haut-lomami","depth":2,"parent":"dr-congo","children":["bukama","kamina","kanyama","kipamba","malemba-nkulu","mulongo"]});
export const childModules = Object.freeze({"bukama":"./bukama/bukama.js","kamina":"./kamina/kamina.js","kanyama":"./kanyama/kanyama.js","kipamba":"./kipamba/kipamba.js","malemba-nkulu":"./malemba-nkulu/malemba-nkulu.js","mulongo":"./mulongo/mulongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
