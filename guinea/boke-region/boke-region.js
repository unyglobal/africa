// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boke-region","repository":"africa","path":"guinea/boke-region","depth":2,"parent":"guinea","children":["boke","fria","kamabi","kamsar","kolaboui","koumbia","koundara","sangaredi","wendou-borou"]});
export const childModules = Object.freeze({"boke":"./boke/boke.js","fria":"./fria/fria.js","kamabi":"./kamabi/kamabi.js","kamsar":"./kamsar/kamsar.js","kolaboui":"./kolaboui/kolaboui.js","koumbia":"./koumbia/koumbia.js","koundara":"./koundara/koundara.js","sangaredi":"./sangaredi/sangaredi.js","wendou-borou":"./wendou-borou/wendou-borou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
