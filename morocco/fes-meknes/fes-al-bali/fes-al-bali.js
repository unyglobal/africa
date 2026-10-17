// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fes-al-bali","repository":"africa","path":"morocco/fes-meknes/fes-al-bali","depth":3,"parent":"morocco/fes-meknes","children":["ain-nokbi","jnane-harbuchi","lfakharine","lotissement-qorroba"]});
export const childModules = Object.freeze({"ain-nokbi":"./ain-nokbi/ain-nokbi.js","jnane-harbuchi":"./jnane-harbuchi/jnane-harbuchi.js","lfakharine":"./lfakharine/lfakharine.js","lotissement-qorroba":"./lotissement-qorroba/lotissement-qorroba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
