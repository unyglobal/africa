// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dchira-el-jihadia","repository":"africa","path":"morocco/souss-massa/dchira-el-jihadia","depth":3,"parent":"morocco/souss-massa","children":["hay-az-zaytoune","hay-le-chalor","hay-rochdi","hay-saada"]});
export const childModules = Object.freeze({"hay-az-zaytoune":"./hay-az-zaytoune/hay-az-zaytoune.js","hay-le-chalor":"./hay-le-chalor/hay-le-chalor.js","hay-rochdi":"./hay-rochdi/hay-rochdi.js","hay-saada":"./hay-saada/hay-saada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
