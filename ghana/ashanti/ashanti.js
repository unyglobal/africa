// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ashanti","repository":"africa","path":"ghana/ashanti","depth":2,"parent":"ghana","children":["agogo","bekwai","effiduase","ejura","konongo","kumasi","mampong","new-tafo","obuase","tafo","tepa"]});
export const childModules = Object.freeze({"agogo":"./agogo/agogo.js","bekwai":"./bekwai/bekwai.js","effiduase":"./effiduase/effiduase.js","ejura":"./ejura/ejura.js","konongo":"./konongo/konongo.js","kumasi":"./kumasi/kumasi.js","mampong":"./mampong/mampong.js","new-tafo":"./new-tafo/new-tafo.js","obuase":"./obuase/obuase.js","tafo":"./tafo/tafo.js","tepa":"./tepa/tepa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
