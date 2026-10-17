// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"singida","repository":"africa","path":"tanzania/singida","depth":2,"parent":"tanzania","children":["igugunu","ikungi","ilongero","itigi","kiomboi","manyoni","mgandu","mtinko","mungaa","puma","sepuka","shelui"]});
export const childModules = Object.freeze({"igugunu":"./igugunu/igugunu.js","ikungi":"./ikungi/ikungi.js","ilongero":"./ilongero/ilongero.js","itigi":"./itigi/itigi.js","kiomboi":"./kiomboi/kiomboi.js","manyoni":"./manyoni/manyoni.js","mgandu":"./mgandu/mgandu.js","mtinko":"./mtinko/mtinko.js","mungaa":"./mungaa/mungaa.js","puma":"./puma/puma.js","sepuka":"./sepuka/sepuka.js","shelui":"./shelui/shelui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
