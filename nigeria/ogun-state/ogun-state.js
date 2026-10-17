// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ogun-state","repository":"africa","path":"nigeria/ogun-state","depth":2,"parent":"nigeria","children":["abeokuta","ado-odo","ifo","ijebu-igbo","ijebu-ode","ijoko","ilaro","iperu","iyesi","ota","river-atuwara","shagamu"]});
export const childModules = Object.freeze({"abeokuta":"./abeokuta/abeokuta.js","ado-odo":"./ado-odo/ado-odo.js","ifo":"./ifo/ifo.js","ijebu-igbo":"./ijebu-igbo/ijebu-igbo.js","ijebu-ode":"./ijebu-ode/ijebu-ode.js","ijoko":"./ijoko/ijoko.js","ilaro":"./ilaro/ilaro.js","iperu":"./iperu/iperu.js","iyesi":"./iyesi/iyesi.js","ota":"./ota/ota.js","river-atuwara":"./river-atuwara/river-atuwara.js","shagamu":"./shagamu/shagamu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
