// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-province","repository":"africa","path":"zambia/eastern-province","depth":2,"parent":"zambia","children":["chipata","katete","lundazi","nyimba","petauke","sinda"]});
export const childModules = Object.freeze({"chipata":"./chipata/chipata.js","katete":"./katete/katete.js","lundazi":"./lundazi/lundazi.js","nyimba":"./nyimba/nyimba.js","petauke":"./petauke/petauke.js","sinda":"./sinda/sinda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
