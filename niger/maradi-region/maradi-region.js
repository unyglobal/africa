// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maradi-region","repository":"africa","path":"niger/maradi-region","depth":2,"parent":"niger","children":["aguie","dakoro","gazaoua","guidan-roumdji","madarounfa","maradi","mayahi","tessaoua","tibiri"]});
export const childModules = Object.freeze({"aguie":"./aguie/aguie.js","dakoro":"./dakoro/dakoro.js","gazaoua":"./gazaoua/gazaoua.js","guidan-roumdji":"./guidan-roumdji/guidan-roumdji.js","madarounfa":"./madarounfa/madarounfa.js","maradi":"./maradi/maradi.js","mayahi":"./mayahi/mayahi.js","tessaoua":"./tessaoua/tessaoua.js","tibiri":"./tibiri/tibiri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
