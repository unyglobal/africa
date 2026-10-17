// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benslimane","repository":"africa","path":"morocco/casablanca-settat/benslimane","depth":3,"parent":"morocco/casablanca-settat","children":["hay-el-farah","hay-lhassani","hay-lqods","lbachaouiya"]});
export const childModules = Object.freeze({"hay-el-farah":"./hay-el-farah/hay-el-farah.js","hay-lhassani":"./hay-lhassani/hay-lhassani.js","hay-lqods":"./hay-lqods/hay-lqods.js","lbachaouiya":"./lbachaouiya/lbachaouiya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
