// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"az-zuhur","repository":"africa","path":"egypt/port-said/az-zuhur","depth":3,"parent":"egypt/port-said","children":["jaraj-hayy-al-manakh","masakin-at-taqah-ash-shamsiyah","masakin-khalid-bin-al-walid","masakin-shabab-al-madinah","masakin-umar-bin-al-khattab","masakin-uthman"]});
export const childModules = Object.freeze({"jaraj-hayy-al-manakh":"./jaraj-hayy-al-manakh/jaraj-hayy-al-manakh.js","masakin-at-taqah-ash-shamsiyah":"./masakin-at-taqah-ash-shamsiyah/masakin-at-taqah-ash-shamsiyah.js","masakin-khalid-bin-al-walid":"./masakin-khalid-bin-al-walid/masakin-khalid-bin-al-walid.js","masakin-shabab-al-madinah":"./masakin-shabab-al-madinah/masakin-shabab-al-madinah.js","masakin-umar-bin-al-khattab":"./masakin-umar-bin-al-khattab/masakin-umar-bin-al-khattab.js","masakin-uthman":"./masakin-uthman/masakin-uthman.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
