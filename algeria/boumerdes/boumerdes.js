// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boumerdes","repository":"africa","path":"algeria/boumerdes","depth":2,"parent":"algeria","children":["arbatache","beni-amrane","bordj-menaiel","boudouaou","boumerdas","chabet-el-ameur","dellys","khemis-el-khechna","naciria","ouled-haddaj","ouled-moussa","thenia"]});
export const childModules = Object.freeze({"arbatache":"./arbatache/arbatache.js","beni-amrane":"./beni-amrane/beni-amrane.js","bordj-menaiel":"./bordj-menaiel/bordj-menaiel.js","boudouaou":"./boudouaou/boudouaou.js","boumerdas":"./boumerdas/boumerdas.js","chabet-el-ameur":"./chabet-el-ameur/chabet-el-ameur.js","dellys":"./dellys/dellys.js","khemis-el-khechna":"./khemis-el-khechna/khemis-el-khechna.js","naciria":"./naciria/naciria.js","ouled-haddaj":"./ouled-haddaj/ouled-haddaj.js","ouled-moussa":"./ouled-moussa/ouled-moussa.js","thenia":"./thenia/thenia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
