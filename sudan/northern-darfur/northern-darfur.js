// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-darfur","repository":"africa","path":"sudan/northern-darfur","depth":2,"parent":"sudan","children":["el-fasher","kabkabiyah","kutum","mellit"]});
export const childModules = Object.freeze({"el-fasher":"./el-fasher/el-fasher.js","kabkabiyah":"./kabkabiyah/kabkabiyah.js","kutum":"./kutum/kutum.js","mellit":"./mellit/mellit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
