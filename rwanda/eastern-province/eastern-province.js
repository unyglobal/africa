// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-province","repository":"africa","path":"rwanda/eastern-province","depth":2,"parent":"rwanda","children":["bugaragara","kayonza","kibungo","nyagatare","nyamata","rwamagana","umutara"]});
export const childModules = Object.freeze({"bugaragara":"./bugaragara/bugaragara.js","kayonza":"./kayonza/kayonza.js","kibungo":"./kibungo/kibungo.js","nyagatare":"./nyagatare/nyagatare.js","nyamata":"./nyamata/nyamata.js","rwamagana":"./rwamagana/rwamagana.js","umutara":"./umutara/umutara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
