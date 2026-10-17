// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"midlands-province","repository":"africa","path":"zimbabwe/midlands-province","depth":2,"parent":"zimbabwe","children":["gokwe","gweru","kwekwe","redcliff","shurugwi"]});
export const childModules = Object.freeze({"gokwe":"./gokwe/gokwe.js","gweru":"./gweru/gweru.js","kwekwe":"./kwekwe/kwekwe.js","redcliff":"./redcliff/redcliff.js","shurugwi":"./shurugwi/shurugwi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
