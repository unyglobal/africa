// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adamaoua","repository":"africa","path":"cameroon/adamaoua","depth":2,"parent":"cameroon","children":["banyo","meiganga","ngaoundal","ngaoundere","tibati"]});
export const childModules = Object.freeze({"banyo":"./banyo/banyo.js","meiganga":"./meiganga/meiganga.js","ngaoundal":"./ngaoundal/ngaoundal.js","ngaoundere":"./ngaoundere/ngaoundere.js","tibati":"./tibati/tibati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
