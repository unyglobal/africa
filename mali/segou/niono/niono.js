// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niono","repository":"africa","path":"mali/segou/niono","depth":3,"parent":"mali/segou","children":["koloni-km26","kouyan-n-golobala","kouyan-peguena"]});
export const childModules = Object.freeze({"koloni-km26":"./koloni-km26/koloni-km26.js","kouyan-n-golobala":"./kouyan-n-golobala/kouyan-n-golobala.js","kouyan-peguena":"./kouyan-peguena/kouyan-peguena.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
