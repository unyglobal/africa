// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre-ouest","repository":"africa","path":"burkina-faso/centre-ouest","depth":2,"parent":"burkina-faso","children":["gao","kindi","kokologo","koudougou","leo","reo","sabou","sapouy","tita","to"]});
export const childModules = Object.freeze({"gao":"./gao/gao.js","kindi":"./kindi/kindi.js","kokologo":"./kokologo/kokologo.js","koudougou":"./koudougou/koudougou.js","leo":"./leo/leo.js","reo":"./reo/reo.js","sabou":"./sabou/sabou.js","sapouy":"./sapouy/sapouy.js","tita":"./tita/tita.js","to":"./to/to.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
