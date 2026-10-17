// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oriental","repository":"africa","path":"morocco/oriental","depth":2,"parent":"morocco","children":["ahfir","ain-beni-mathar","al-aaroui","ben-taieb","beni-enzar","berkane","bouarfa","driouch","el-aioun","jerada","midar","nador","oujda","selouane","sidi-slimane-echcharaa","taourirt","zaio","zeghanghane"]});
export const childModules = Object.freeze({"ahfir":"./ahfir/ahfir.js","ain-beni-mathar":"./ain-beni-mathar/ain-beni-mathar.js","al-aaroui":"./al-aaroui/al-aaroui.js","ben-taieb":"./ben-taieb/ben-taieb.js","beni-enzar":"./beni-enzar/beni-enzar.js","berkane":"./berkane/berkane.js","bouarfa":"./bouarfa/bouarfa.js","driouch":"./driouch/driouch.js","el-aioun":"./el-aioun/el-aioun.js","jerada":"./jerada/jerada.js","midar":"./midar/midar.js","nador":"./nador/nador.js","oujda":"./oujda/oujda.js","selouane":"./selouane/selouane.js","sidi-slimane-echcharaa":"./sidi-slimane-echcharaa/sidi-slimane-echcharaa.js","taourirt":"./taourirt/taourirt.js","zaio":"./zaio/zaio.js","zeghanghane":"./zeghanghane/zeghanghane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
