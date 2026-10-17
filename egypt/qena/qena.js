// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qena","repository":"africa","path":"egypt/qena","depth":2,"parent":"egypt","children":["abu-tisht","al-waqf","armant","dishna","esna","farshut","jarajus","nag-hammadi","naqadah","qift","qina","qus"]});
export const childModules = Object.freeze({"abu-tisht":"./abu-tisht/abu-tisht.js","al-waqf":"./al-waqf/al-waqf.js","armant":"./armant/armant.js","dishna":"./dishna/dishna.js","esna":"./esna/esna.js","farshut":"./farshut/farshut.js","jarajus":"./jarajus/jarajus.js","nag-hammadi":"./nag-hammadi/nag-hammadi.js","naqadah":"./naqadah/naqadah.js","qift":"./qift/qift.js","qina":"./qina/qina.js","qus":"./qus/qus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
