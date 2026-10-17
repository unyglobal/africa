// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ben-arous-governorate","repository":"africa","path":"tunisia/ben-arous-governorate","depth":2,"parent":"tunisia","children":["ben-arous","borj-cedria","boumhel-el-bassatine","el-mourouj","ez-zahra","fouchana","hammam-lif","la-sebala-du-mornag","rades"]});
export const childModules = Object.freeze({"ben-arous":"./ben-arous/ben-arous.js","borj-cedria":"./borj-cedria/borj-cedria.js","boumhel-el-bassatine":"./boumhel-el-bassatine/boumhel-el-bassatine.js","el-mourouj":"./el-mourouj/el-mourouj.js","ez-zahra":"./ez-zahra/ez-zahra.js","fouchana":"./fouchana/fouchana.js","hammam-lif":"./hammam-lif/hammam-lif.js","la-sebala-du-mornag":"./la-sebala-du-mornag/la-sebala-du-mornag.js","rades":"./rades/rades.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
