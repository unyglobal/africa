// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"selibe-phikwe","repository":"africa","path":"botswana/selibe-phikwe","depth":2,"parent":"botswana","children":["selebi-phikwe"]});
export const childModules = Object.freeze({"selebi-phikwe":"./selebi-phikwe/selebi-phikwe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
