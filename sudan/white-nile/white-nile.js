// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"white-nile","repository":"africa","path":"sudan/white-nile","depth":2,"parent":"sudan","children":["ad-douiem","al-jazeera-aba","al-qitena","al-qutaynah","kosti","rabak","tandalti"]});
export const childModules = Object.freeze({"ad-douiem":"./ad-douiem/ad-douiem.js","al-jazeera-aba":"./al-jazeera-aba/al-jazeera-aba.js","al-qitena":"./al-qitena/al-qitena.js","al-qutaynah":"./al-qutaynah/al-qutaynah.js","kosti":"./kosti/kosti.js","rabak":"./rabak/rabak.js","tandalti":"./tandalti/tandalti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
