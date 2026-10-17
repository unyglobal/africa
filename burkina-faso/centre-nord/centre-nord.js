// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre-nord","repository":"africa","path":"burkina-faso/centre-nord","depth":2,"parent":"burkina-faso","children":["boulsa","bourzanga","kaya","kongoussi","korsimoro","kouka","pissila","yalgo"]});
export const childModules = Object.freeze({"boulsa":"./boulsa/boulsa.js","bourzanga":"./bourzanga/bourzanga.js","kaya":"./kaya/kaya.js","kongoussi":"./kongoussi/kongoussi.js","korsimoro":"./korsimoro/korsimoro.js","kouka":"./kouka/kouka.js","pissila":"./pissila/pissila.js","yalgo":"./yalgo/yalgo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
