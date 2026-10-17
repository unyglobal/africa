// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tabora","repository":"africa","path":"tanzania/tabora","depth":2,"parent":"tanzania","children":["igunga","mabama","mambali","nzega","sikonge","tumbi","urambo"]});
export const childModules = Object.freeze({"igunga":"./igunga/igunga.js","mabama":"./mabama/mabama.js","mambali":"./mambali/mambali.js","nzega":"./nzega/nzega.js","sikonge":"./sikonge/sikonge.js","tumbi":"./tumbi/tumbi.js","urambo":"./urambo/urambo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
