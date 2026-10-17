// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tizi-ouzou","repository":"africa","path":"algeria/tizi-ouzou","depth":2,"parent":"algeria","children":["ain-el-hammam","arhribs","azazga","beni-douala","boghni","boudjima","draa-ben-khedda","draa-el-mizan","freha","l-arbaa-nait-irathen","maatkas","makouda","mekla","tadmait","timizart","tirmitine","tizi-gheniff","tizi-n-tleta","tizi-rached"]});
export const childModules = Object.freeze({"ain-el-hammam":"./ain-el-hammam/ain-el-hammam.js","arhribs":"./arhribs/arhribs.js","azazga":"./azazga/azazga.js","beni-douala":"./beni-douala/beni-douala.js","boghni":"./boghni/boghni.js","boudjima":"./boudjima/boudjima.js","draa-ben-khedda":"./draa-ben-khedda/draa-ben-khedda.js","draa-el-mizan":"./draa-el-mizan/draa-el-mizan.js","freha":"./freha/freha.js","l-arbaa-nait-irathen":"./l-arbaa-nait-irathen/l-arbaa-nait-irathen.js","maatkas":"./maatkas/maatkas.js","makouda":"./makouda/makouda.js","mekla":"./mekla/mekla.js","tadmait":"./tadmait/tadmait.js","timizart":"./timizart/timizart.js","tirmitine":"./tirmitine/tirmitine.js","tizi-gheniff":"./tizi-gheniff/tizi-gheniff.js","tizi-n-tleta":"./tizi-n-tleta/tizi-n-tleta.js","tizi-rached":"./tizi-rached/tizi-rached.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
