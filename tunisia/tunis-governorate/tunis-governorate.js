// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tunis-governorate","repository":"africa","path":"tunisia/tunis-governorate","depth":2,"parent":"tunisia","children":["carthage","la-goulette","la-marsa","la-mohammedia","le-bardo","le-kram","megrine","sidi-husayn","tunis"]});
export const childModules = Object.freeze({"carthage":"./carthage/carthage.js","la-goulette":"./la-goulette/la-goulette.js","la-marsa":"./la-marsa/la-marsa.js","la-mohammedia":"./la-mohammedia/la-mohammedia.js","le-bardo":"./le-bardo/le-bardo.js","le-kram":"./le-kram/le-kram.js","megrine":"./megrine/megrine.js","sidi-husayn":"./sidi-husayn/sidi-husayn.js","tunis":"./tunis/tunis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
