// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oum-el-bouaghi","repository":"africa","path":"algeria/oum-el-bouaghi","depth":2,"parent":"algeria","children":["ain-beida","ain-fakroun","ain-kercha","ain-m-lila","meskiana"]});
export const childModules = Object.freeze({"ain-beida":"./ain-beida/ain-beida.js","ain-fakroun":"./ain-fakroun/ain-fakroun.js","ain-kercha":"./ain-kercha/ain-kercha.js","ain-m-lila":"./ain-m-lila/ain-m-lila.js","meskiana":"./meskiana/meskiana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
