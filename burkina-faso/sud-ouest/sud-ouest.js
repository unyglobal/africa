// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sud-ouest","repository":"africa","path":"burkina-faso/sud-ouest","depth":2,"parent":"burkina-faso","children":["batie","dano","diebougou","gaoua"]});
export const childModules = Object.freeze({"batie":"./batie/batie.js","dano":"./dano/dano.js","diebougou":"./diebougou/diebougou.js","gaoua":"./gaoua/gaoua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
