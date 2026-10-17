// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marrakesh-safi","repository":"africa","path":"morocco/marrakesh-safi","depth":2,"parent":"morocco","children":["ait-ourir","amizmiz","asni","ben-guerir","chichaoua","echemmaia-est","el-kelaa-des-srarhna","essaouira","imi-n-tanout","laattaouia","marrakesh","mechouar-kasba","safi","sebt-gzoula","setti-fatma","tamallalt","tamansourt","youssoufia"]});
export const childModules = Object.freeze({"ait-ourir":"./ait-ourir/ait-ourir.js","amizmiz":"./amizmiz/amizmiz.js","asni":"./asni/asni.js","ben-guerir":"./ben-guerir/ben-guerir.js","chichaoua":"./chichaoua/chichaoua.js","echemmaia-est":"./echemmaia-est/echemmaia-est.js","el-kelaa-des-srarhna":"./el-kelaa-des-srarhna/el-kelaa-des-srarhna.js","essaouira":"./essaouira/essaouira.js","imi-n-tanout":"./imi-n-tanout/imi-n-tanout.js","laattaouia":"./laattaouia/laattaouia.js","marrakesh":"./marrakesh/marrakesh.js","mechouar-kasba":"./mechouar-kasba/mechouar-kasba.js","safi":"./safi/safi.js","sebt-gzoula":"./sebt-gzoula/sebt-gzoula.js","setti-fatma":"./setti-fatma/setti-fatma.js","tamallalt":"./tamallalt/tamallalt.js","tamansourt":"./tamansourt/tamansourt.js","youssoufia":"./youssoufia/youssoufia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
