// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beni-mellal-khenifra","repository":"africa","path":"morocco/beni-mellal-khenifra","depth":2,"parent":"morocco","children":["aguelmous","al-fqih-ben-calah","azilal","bejaad","beni-mellal","boujniba","boumia","demnate","el-ksiba","kasba-tadla","khenifra","khouribga","midelt","mrirt","oued-zem","oulad-ayad","souq-sebt-oulad-nemma","zawyat-ech-cheikh"]});
export const childModules = Object.freeze({"aguelmous":"./aguelmous/aguelmous.js","al-fqih-ben-calah":"./al-fqih-ben-calah/al-fqih-ben-calah.js","azilal":"./azilal/azilal.js","bejaad":"./bejaad/bejaad.js","beni-mellal":"./beni-mellal/beni-mellal.js","boujniba":"./boujniba/boujniba.js","boumia":"./boumia/boumia.js","demnate":"./demnate/demnate.js","el-ksiba":"./el-ksiba/el-ksiba.js","kasba-tadla":"./kasba-tadla/kasba-tadla.js","khenifra":"./khenifra/khenifra.js","khouribga":"./khouribga/khouribga.js","midelt":"./midelt/midelt.js","mrirt":"./mrirt/mrirt.js","oued-zem":"./oued-zem/oued-zem.js","oulad-ayad":"./oulad-ayad/oulad-ayad.js","souq-sebt-oulad-nemma":"./souq-sebt-oulad-nemma/souq-sebt-oulad-nemma.js","zawyat-ech-cheikh":"./zawyat-ech-cheikh/zawyat-ech-cheikh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
