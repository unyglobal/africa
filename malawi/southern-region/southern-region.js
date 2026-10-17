// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-region","repository":"africa","path":"malawi/southern-region","depth":2,"parent":"malawi","children":["balaka","blantyre","liwonde","mangochi","monkey-bay","mulanje","mwanza","nsanje","zomba"]});
export const childModules = Object.freeze({"balaka":"./balaka/balaka.js","blantyre":"./blantyre/blantyre.js","liwonde":"./liwonde/liwonde.js","mangochi":"./mangochi/mangochi.js","monkey-bay":"./monkey-bay/monkey-bay.js","mulanje":"./mulanje/mulanje.js","mwanza":"./mwanza/mwanza.js","nsanje":"./nsanje/nsanje.js","zomba":"./zomba/zomba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
