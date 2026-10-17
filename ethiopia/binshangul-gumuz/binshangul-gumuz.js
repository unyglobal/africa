// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"binshangul-gumuz","repository":"africa","path":"ethiopia/binshangul-gumuz","depth":2,"parent":"ethiopia","children":["asosa","bambesi","dibate","mambuk"]});
export const childModules = Object.freeze({"asosa":"./asosa/asosa.js","bambesi":"./bambesi/bambesi.js","dibate":"./dibate/dibate.js","mambuk":"./mambuk/mambuk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
