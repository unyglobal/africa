// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cabo-delgado-province","repository":"africa","path":"mozambique/cabo-delgado-province","depth":2,"parent":"mozambique","children":["chiure","macomia","mocimboa","mocimboa-da-praia","montepuez","mueda","pemba"]});
export const childModules = Object.freeze({"chiure":"./chiure/chiure.js","macomia":"./macomia/macomia.js","mocimboa":"./mocimboa/mocimboa.js","mocimboa-da-praia":"./mocimboa-da-praia/mocimboa-da-praia.js","montepuez":"./montepuez/montepuez.js","mueda":"./mueda/mueda.js","pemba":"./pemba/pemba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
