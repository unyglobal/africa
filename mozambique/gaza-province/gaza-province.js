// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaza-province","repository":"africa","path":"mozambique/gaza-province","depth":2,"parent":"mozambique","children":["chibuto","chokwe","macia","xai-xai","xilembene"]});
export const childModules = Object.freeze({"chibuto":"./chibuto/chibuto.js","chokwe":"./chokwe/chokwe.js","macia":"./macia/macia.js","xai-xai":"./xai-xai/xai-xai.js","xilembene":"./xilembene/xilembene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
