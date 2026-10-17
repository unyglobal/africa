// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sousse-governorate","repository":"africa","path":"tunisia/sousse-governorate","depth":2,"parent":"tunisia","children":["akouda","ezzouhour","hammam-sousse","kalaa-srira","kelaa-kebira","msaken","sousse","zaouiet-sousse"]});
export const childModules = Object.freeze({"akouda":"./akouda/akouda.js","ezzouhour":"./ezzouhour/ezzouhour.js","hammam-sousse":"./hammam-sousse/hammam-sousse.js","kalaa-srira":"./kalaa-srira/kalaa-srira.js","kelaa-kebira":"./kelaa-kebira/kelaa-kebira.js","msaken":"./msaken/msaken.js","sousse":"./sousse/sousse.js","zaouiet-sousse":"./zaouiet-sousse/zaouiet-sousse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
