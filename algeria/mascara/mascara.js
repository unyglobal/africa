// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mascara","repository":"africa","path":"algeria/mascara","depth":2,"parent":"algeria","children":["bou-hanifia-el-hamamat","mohammadia","oued-el-abtal","sig","tighenif"]});
export const childModules = Object.freeze({"bou-hanifia-el-hamamat":"./bou-hanifia-el-hamamat/bou-hanifia-el-hamamat.js","mohammadia":"./mohammadia/mohammadia.js","oued-el-abtal":"./oued-el-abtal/oued-el-abtal.js","sig":"./sig/sig.js","tighenif":"./tighenif/tighenif.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
