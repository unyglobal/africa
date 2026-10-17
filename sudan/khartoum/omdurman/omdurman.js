// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"omdurman","repository":"africa","path":"sudan/khartoum/omdurman","depth":3,"parent":"sudan/khartoum","children":["al-ardah","ar-rabatab","hay-al-arab","hay-al-mustashfa"]});
export const childModules = Object.freeze({"al-ardah":"./al-ardah/al-ardah.js","ar-rabatab":"./ar-rabatab/ar-rabatab.js","hay-al-arab":"./hay-al-arab/hay-al-arab.js","hay-al-mustashfa":"./hay-al-mustashfa/hay-al-mustashfa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
