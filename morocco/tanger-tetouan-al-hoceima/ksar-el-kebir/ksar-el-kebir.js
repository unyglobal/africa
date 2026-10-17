// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ksar-el-kebir","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/ksar-el-kebir","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["hay-lhace","hay-lmassira","hay-lorouba","hay-nahda","lotti-lfadl","tresorene"]});
export const childModules = Object.freeze({"hay-lhace":"./hay-lhace/hay-lhace.js","hay-lmassira":"./hay-lmassira/hay-lmassira.js","hay-lorouba":"./hay-lorouba/hay-lorouba.js","hay-nahda":"./hay-nahda/hay-nahda.js","lotti-lfadl":"./lotti-lfadl/lotti-lfadl.js","tresorene":"./tresorene/tresorene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
