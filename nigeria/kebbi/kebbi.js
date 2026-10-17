// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kebbi","repository":"africa","path":"nigeria/kebbi","depth":2,"parent":"nigeria","children":["argungu","birnin-kebbi","jega","kamba","zuru"]});
export const childModules = Object.freeze({"argungu":"./argungu/argungu.js","birnin-kebbi":"./birnin-kebbi/birnin-kebbi.js","jega":"./jega/jega.js","kamba":"./kamba/kamba.js","zuru":"./zuru/zuru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
