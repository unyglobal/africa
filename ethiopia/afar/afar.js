// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"afar","repository":"africa","path":"ethiopia/afar","depth":2,"parent":"ethiopia","children":["arerti","asaita","awash","dubti","logiya","mehoni","mile","samara","sifra"]});
export const childModules = Object.freeze({"arerti":"./arerti/arerti.js","asaita":"./asaita/asaita.js","awash":"./awash/awash.js","dubti":"./dubti/dubti.js","logiya":"./logiya/logiya.js","mehoni":"./mehoni/mehoni.js","mile":"./mile/mile.js","samara":"./samara/samara.js","sifra":"./sifra/sifra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
