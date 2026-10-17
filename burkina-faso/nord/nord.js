// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nord","repository":"africa","path":"burkina-faso/nord","depth":2,"parent":"burkina-faso","children":["gourcy","ouahigouya","titao","yako"]});
export const childModules = Object.freeze({"gourcy":"./gourcy/gourcy.js","ouahigouya":"./ouahigouya/ouahigouya.js","titao":"./titao/titao.js","yako":"./yako/yako.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
