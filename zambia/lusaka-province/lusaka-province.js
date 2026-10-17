// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lusaka-province","repository":"africa","path":"zambia/lusaka-province","depth":2,"parent":"zambia","children":["chilanga-township","chisankane","chongwe","chunga","kafue","lusaka","lusaka-west","madido","namalombwe","ntandabale","palabana"]});
export const childModules = Object.freeze({"chilanga-township":"./chilanga-township/chilanga-township.js","chisankane":"./chisankane/chisankane.js","chongwe":"./chongwe/chongwe.js","chunga":"./chunga/chunga.js","kafue":"./kafue/kafue.js","lusaka":"./lusaka/lusaka.js","lusaka-west":"./lusaka-west/lusaka-west.js","madido":"./madido/madido.js","namalombwe":"./namalombwe/namalombwe.js","ntandabale":"./ntandabale/ntandabale.js","palabana":"./palabana/palabana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
