// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cascades-region","repository":"africa","path":"burkina-faso/cascades-region","depth":2,"parent":"burkina-faso","children":["banfora","niangoloko"]});
export const childModules = Object.freeze({"banfora":"./banfora/banfora.js","niangoloko":"./niangoloko/niangoloko.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
