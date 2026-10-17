// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yobe-state","repository":"africa","path":"nigeria/yobe-state","depth":2,"parent":"nigeria","children":["damaturu","gashua","geidam","kumagunnam","nguru","potiskum"]});
export const childModules = Object.freeze({"damaturu":"./damaturu/damaturu.js","gashua":"./gashua/gashua.js","geidam":"./geidam/geidam.js","kumagunnam":"./kumagunnam/kumagunnam.js","nguru":"./nguru/nguru.js","potiskum":"./potiskum/potiskum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
