// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"constantine","repository":"africa","path":"algeria/constantine","depth":2,"parent":"algeria","children":["ain-abid","ain-smara","ali-mendjeli","didouche-mourad","el-khroub","hamma-bouziane","zighout-youcef"]});
export const childModules = Object.freeze({"ain-abid":"./ain-abid/ain-abid.js","ain-smara":"./ain-smara/ain-smara.js","ali-mendjeli":"./ali-mendjeli/ali-mendjeli.js","didouche-mourad":"./didouche-mourad/didouche-mourad.js","el-khroub":"./el-khroub/el-khroub.js","hamma-bouziane":"./hamma-bouziane/hamma-bouziane.js","zighout-youcef":"./zighout-youcef/zighout-youcef.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
