// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batna","repository":"africa","path":"algeria/batna","depth":2,"parent":"algeria","children":["ain-touta","arris","barika","merouana","n-gaous","ras-el-aioun","tazoult-lambese"]});
export const childModules = Object.freeze({"ain-touta":"./ain-touta/ain-touta.js","arris":"./arris/arris.js","barika":"./barika/barika.js","merouana":"./merouana/merouana.js","n-gaous":"./n-gaous/n-gaous.js","ras-el-aioun":"./ras-el-aioun/ras-el-aioun.js","tazoult-lambese":"./tazoult-lambese/tazoult-lambese.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
