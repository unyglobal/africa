// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"red-sea","repository":"africa","path":"egypt/red-sea","depth":2,"parent":"egypt","children":["al-qusayr","ar-radisiyah-qibli","bani-suwayf-al-jadidah","hala-ib","hurghada","ras-gharib","safaga","zaafarana"]});
export const childModules = Object.freeze({"al-qusayr":"./al-qusayr/al-qusayr.js","ar-radisiyah-qibli":"./ar-radisiyah-qibli/ar-radisiyah-qibli.js","bani-suwayf-al-jadidah":"./bani-suwayf-al-jadidah/bani-suwayf-al-jadidah.js","hala-ib":"./hala-ib/hala-ib.js","hurghada":"./hurghada/hurghada.js","ras-gharib":"./ras-gharib/ras-gharib.js","safaga":"./safaga/safaga.js","zaafarana":"./zaafarana/zaafarana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
