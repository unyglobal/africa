// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"migori-county","repository":"africa","path":"kenya/migori-county","depth":2,"parent":"kenya","children":["isebania","kihancha","migori","rongo"]});
export const childModules = Object.freeze({"isebania":"./isebania/isebania.js","kihancha":"./kihancha/kihancha.js","migori":"./migori/migori.js","rongo":"./rongo/rongo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
