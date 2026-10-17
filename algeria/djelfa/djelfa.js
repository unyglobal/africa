// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"djelfa","repository":"africa","path":"algeria/djelfa","depth":2,"parent":"algeria","children":["ain-el-bell","ain-oussera","birine","charef","dar-chioukh","el-idrissia","feidh-el-botma","hassi-bahbah","messaad"]});
export const childModules = Object.freeze({"ain-el-bell":"./ain-el-bell/ain-el-bell.js","ain-oussera":"./ain-oussera/ain-oussera.js","birine":"./birine/birine.js","charef":"./charef/charef.js","dar-chioukh":"./dar-chioukh/dar-chioukh.js","el-idrissia":"./el-idrissia/el-idrissia.js","feidh-el-botma":"./feidh-el-botma/feidh-el-botma.js","hassi-bahbah":"./hassi-bahbah/hassi-bahbah.js","messaad":"./messaad/messaad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
