// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borno-state","repository":"africa","path":"nigeria/borno-state","depth":2,"parent":"nigeria","children":["bama","biu","damboa","dikwa","gamboru","gwoza","kukawa","magumeri","maiduguri","marte","monguno"]});
export const childModules = Object.freeze({"bama":"./bama/bama.js","biu":"./biu/biu.js","damboa":"./damboa/damboa.js","dikwa":"./dikwa/dikwa.js","gamboru":"./gamboru/gamboru.js","gwoza":"./gwoza/gwoza.js","kukawa":"./kukawa/kukawa.js","magumeri":"./magumeri/magumeri.js","maiduguri":"./maiduguri/maiduguri.js","marte":"./marte/marte.js","monguno":"./monguno/monguno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
