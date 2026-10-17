// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mali","repository":"africa","path":"mali","depth":1,"parent":"","children":["bamako","gao","kayes","kidal","koulikoro","menaka","mopti","segou","sikasso","tombouctou"]});
export const childModules = Object.freeze({"bamako":"./bamako/bamako.js","gao":"./gao/gao.js","kayes":"./kayes/kayes.js","kidal":"./kidal/kidal.js","koulikoro":"./koulikoro/koulikoro.js","menaka":"./menaka/menaka.js","mopti":"./mopti/mopti.js","segou":"./segou/segou.js","sikasso":"./sikasso/sikasso.js","tombouctou":"./tombouctou/tombouctou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
