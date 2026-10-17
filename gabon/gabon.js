// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabon","repository":"africa","path":"gabon","depth":1,"parent":"","children":["estuaire","haut-ogooue","moyen-ogooue","ngouni","nyanga","ogooue-ivindo","ogooue-lolo","ogooue-maritime","woleu-ntem"]});
export const childModules = Object.freeze({"estuaire":"./estuaire/estuaire.js","haut-ogooue":"./haut-ogooue/haut-ogooue.js","moyen-ogooue":"./moyen-ogooue/moyen-ogooue.js","ngouni":"./ngouni/ngouni.js","nyanga":"./nyanga/nyanga.js","ogooue-ivindo":"./ogooue-ivindo/ogooue-ivindo.js","ogooue-lolo":"./ogooue-lolo/ogooue-lolo.js","ogooue-maritime":"./ogooue-maritime/ogooue-maritime.js","woleu-ntem":"./woleu-ntem/woleu-ntem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
