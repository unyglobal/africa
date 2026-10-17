// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diana","repository":"africa","path":"madagascar/diana","depth":2,"parent":"madagascar","children":["ambanja","ambarakaraka","ambilobe","antsiranana","antsohimbondrona","hell-ville"]});
export const childModules = Object.freeze({"ambanja":"./ambanja/ambanja.js","ambarakaraka":"./ambarakaraka/ambarakaraka.js","ambilobe":"./ambilobe/ambilobe.js","antsiranana":"./antsiranana/antsiranana.js","antsohimbondrona":"./antsohimbondrona/antsohimbondrona.js","hell-ville":"./hell-ville/hell-ville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
