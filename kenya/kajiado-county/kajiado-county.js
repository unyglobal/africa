// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kajiado-county","repository":"africa","path":"kenya/kajiado-county","depth":2,"parent":"kenya","children":["kajiado","kiserian","kitengela","ngong","ongata-rongai"]});
export const childModules = Object.freeze({"kajiado":"./kajiado/kajiado.js","kiserian":"./kiserian/kiserian.js","kitengela":"./kitengela/kitengela.js","ngong":"./ngong/ngong.js","ongata-rongai":"./ongata-rongai/ongata-rongai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
