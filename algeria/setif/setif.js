// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"setif","repository":"africa","path":"algeria/setif","depth":2,"parent":"algeria","children":["ain-arnat","ain-azel","ain-oulmene","babor","bougaa","el-eulma","salah-bey"]});
export const childModules = Object.freeze({"ain-arnat":"./ain-arnat/ain-arnat.js","ain-azel":"./ain-azel/ain-azel.js","ain-oulmene":"./ain-oulmene/ain-oulmene.js","babor":"./babor/babor.js","bougaa":"./bougaa/bougaa.js","el-eulma":"./el-eulma/el-eulma.js","salah-bey":"./salah-bey/salah-bey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
