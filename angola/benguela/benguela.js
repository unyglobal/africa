// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benguela","repository":"africa","path":"angola/benguela","depth":2,"parent":"angola","children":["baia-farta","balombo","bocoio","catumbela","chindumbo","cubal","cubal-do-lumbo","dombe-grande","ganda","lobito","navegantes"]});
export const childModules = Object.freeze({"baia-farta":"./baia-farta/baia-farta.js","balombo":"./balombo/balombo.js","bocoio":"./bocoio/bocoio.js","catumbela":"./catumbela/catumbela.js","chindumbo":"./chindumbo/chindumbo.js","cubal":"./cubal/cubal.js","cubal-do-lumbo":"./cubal-do-lumbo/cubal-do-lumbo.js","dombe-grande":"./dombe-grande/dombe-grande.js","ganda":"./ganda/ganda.js","lobito":"./lobito/lobito.js","navegantes":"./navegantes/navegantes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
