// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mozambique","repository":"africa","path":"mozambique","depth":1,"parent":"","children":["cabo-delgado-province","gaza-province","inhambane-province","manica","maputo-city","maputo-province","nampula","niassa-province","sofala","tete","zambezia-province"]});
export const childModules = Object.freeze({"cabo-delgado-province":"./cabo-delgado-province/cabo-delgado-province.js","gaza-province":"./gaza-province/gaza-province.js","inhambane-province":"./inhambane-province/inhambane-province.js","manica":"./manica/manica.js","maputo-city":"./maputo-city/maputo-city.js","maputo-province":"./maputo-province/maputo-province.js","nampula":"./nampula/nampula.js","niassa-province":"./niassa-province/niassa-province.js","sofala":"./sofala/sofala.js","tete":"./tete/tete.js","zambezia-province":"./zambezia-province/zambezia-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
