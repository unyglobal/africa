// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bizerte","repository":"africa","path":"tunisia/bizerte-governorate/bizerte","depth":3,"parent":"tunisia/bizerte-governorate","children":["cite-el-andalous","cite-hassen-ennouri","el-attarine","la-kasbah","la-ksiba","la-medina","place-des-potiers"]});
export const childModules = Object.freeze({"cite-el-andalous":"./cite-el-andalous/cite-el-andalous.js","cite-hassen-ennouri":"./cite-hassen-ennouri/cite-hassen-ennouri.js","el-attarine":"./el-attarine/el-attarine.js","la-kasbah":"./la-kasbah/la-kasbah.js","la-ksiba":"./la-ksiba/la-ksiba.js","la-medina":"./la-medina/la-medina.js","place-des-potiers":"./place-des-potiers/place-des-potiers.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
