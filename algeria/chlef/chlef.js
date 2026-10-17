// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chlef","repository":"africa","path":"algeria/chlef","depth":2,"parent":"algeria","children":["abou-el-hassan","ain-merane","boukadir","ech-chettia","oued-fodda","oued-sly","sidi-akkacha","tenes"]});
export const childModules = Object.freeze({"abou-el-hassan":"./abou-el-hassan/abou-el-hassan.js","ain-merane":"./ain-merane/ain-merane.js","boukadir":"./boukadir/boukadir.js","ech-chettia":"./ech-chettia/ech-chettia.js","oued-fodda":"./oued-fodda/oued-fodda.js","oued-sly":"./oued-sly/oued-sly.js","sidi-akkacha":"./sidi-akkacha/sidi-akkacha.js","tenes":"./tenes/tenes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
