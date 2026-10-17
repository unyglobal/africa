// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zambezia-province","repository":"africa","path":"mozambique/zambezia-province","depth":2,"parent":"mozambique","children":["alto-molocue","chinde","gurue","maganja","milange","mocuba","morrumbala","namacurra","pebane","quelimane"]});
export const childModules = Object.freeze({"alto-molocue":"./alto-molocue/alto-molocue.js","chinde":"./chinde/chinde.js","gurue":"./gurue/gurue.js","maganja":"./maganja/maganja.js","milange":"./milange/milange.js","mocuba":"./mocuba/mocuba.js","morrumbala":"./morrumbala/morrumbala.js","namacurra":"./namacurra/namacurra.js","pebane":"./pebane/pebane.js","quelimane":"./quelimane/quelimane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
