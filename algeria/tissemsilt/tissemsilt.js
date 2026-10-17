// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tissemsilt","repository":"africa","path":"algeria/tissemsilt","depth":2,"parent":"algeria","children":["lardjem","theniet-el-had"]});
export const childModules = Object.freeze({"lardjem":"./lardjem/lardjem.js","theniet-el-had":"./theniet-el-had/theniet-el-had.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
