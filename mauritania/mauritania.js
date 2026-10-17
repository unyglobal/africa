// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mauritania","repository":"africa","path":"mauritania","depth":1,"parent":"","children":["adrar","assaba","brakna","dakhlet-nouadhibou","gorgol","guidimaka","hodh-ech-chargi","hodh-el-gharbi","inchiri","nouakchott","nouakchott-north","nouakchott-west","tiris-zemmour","trarza"]});
export const childModules = Object.freeze({"adrar":"./adrar/adrar.js","assaba":"./assaba/assaba.js","brakna":"./brakna/brakna.js","dakhlet-nouadhibou":"./dakhlet-nouadhibou/dakhlet-nouadhibou.js","gorgol":"./gorgol/gorgol.js","guidimaka":"./guidimaka/guidimaka.js","hodh-ech-chargi":"./hodh-ech-chargi/hodh-ech-chargi.js","hodh-el-gharbi":"./hodh-el-gharbi/hodh-el-gharbi.js","inchiri":"./inchiri/inchiri.js","nouakchott":"./nouakchott/nouakchott.js","nouakchott-north":"./nouakchott-north/nouakchott-north.js","nouakchott-west":"./nouakchott-west/nouakchott-west.js","tiris-zemmour":"./tiris-zemmour/tiris-zemmour.js","trarza":"./trarza/trarza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
