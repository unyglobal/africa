// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medea","repository":"africa","path":"algeria/medea","depth":2,"parent":"algeria","children":["berrouaghia","chellalat-el-adhaouara","ksar-el-boukhari"]});
export const childModules = Object.freeze({"berrouaghia":"./berrouaghia/berrouaghia.js","chellalat-el-adhaouara":"./chellalat-el-adhaouara/chellalat-el-adhaouara.js","ksar-el-boukhari":"./ksar-el-boukhari/ksar-el-boukhari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
