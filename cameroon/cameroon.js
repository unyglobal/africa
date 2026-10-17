// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cameroon","repository":"africa","path":"cameroon","depth":1,"parent":"","children":["adamaoua","centre","east","far-north","littoral","north","north-west","south","south-west","west"]});
export const childModules = Object.freeze({"adamaoua":"./adamaoua/adamaoua.js","centre":"./centre/centre.js","east":"./east/east.js","far-north":"./far-north/far-north.js","littoral":"./littoral/littoral.js","north":"./north/north.js","north-west":"./north-west/north-west.js","south":"./south/south.js","south-west":"./south-west/south-west.js","west":"./west/west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
