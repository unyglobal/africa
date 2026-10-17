// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boucle-du-mouhoun","repository":"africa","path":"burkina-faso/boucle-du-mouhoun","depth":2,"parent":"burkina-faso","children":["bama","boromo","dedougou","fara-department","nouna","pa","solenzo","toma","tougan"]});
export const childModules = Object.freeze({"bama":"./bama/bama.js","boromo":"./boromo/boromo.js","dedougou":"./dedougou/dedougou.js","fara-department":"./fara-department/fara-department.js","nouna":"./nouna/nouna.js","pa":"./pa/pa.js","solenzo":"./solenzo/solenzo.js","toma":"./toma/toma.js","tougan":"./tougan/tougan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
