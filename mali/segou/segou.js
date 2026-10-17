// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"segou","repository":"africa","path":"mali/segou","depth":2,"parent":"mali","children":["bla","diourou","dougabougou","ke-macina","markala","moninnpebougou","niono","pelengana","san","siribala-coro"]});
export const childModules = Object.freeze({"bla":"./bla/bla.js","diourou":"./diourou/diourou.js","dougabougou":"./dougabougou/dougabougou.js","ke-macina":"./ke-macina/ke-macina.js","markala":"./markala/markala.js","moninnpebougou":"./moninnpebougou/moninnpebougou.js","niono":"./niono/niono.js","pelengana":"./pelengana/pelengana.js","san":"./san/san.js","siribala-coro":"./siribala-coro/siribala-coro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
