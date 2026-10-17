// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sidi-bouzid","repository":"africa","path":"tunisia/sidi-bouzid-governorate/sidi-bouzid","depth":3,"parent":"tunisia/sidi-bouzid-governorate","children":["cite-el-fraijia","cite-el-hana","cite-ennour-est","cite-ennour-ouest","cite-ouled-belhedi"]});
export const childModules = Object.freeze({"cite-el-fraijia":"./cite-el-fraijia/cite-el-fraijia.js","cite-el-hana":"./cite-el-hana/cite-el-hana.js","cite-ennour-est":"./cite-ennour-est/cite-ennour-est.js","cite-ennour-ouest":"./cite-ennour-ouest/cite-ennour-ouest.js","cite-ouled-belhedi":"./cite-ouled-belhedi/cite-ouled-belhedi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
