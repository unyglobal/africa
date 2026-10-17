// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lesotho","repository":"africa","path":"lesotho","depth":1,"parent":"","children":["berea","butha-buthe","leribe","mafeteng-district","maseru-district","mohale-s-hoek-district","qacha-s-nek-district","quthing","thaba-tseka"]});
export const childModules = Object.freeze({"berea":"./berea/berea.js","butha-buthe":"./butha-buthe/butha-buthe.js","leribe":"./leribe/leribe.js","mafeteng-district":"./mafeteng-district/mafeteng-district.js","maseru-district":"./maseru-district/maseru-district.js","mohale-s-hoek-district":"./mohale-s-hoek-district/mohale-s-hoek-district.js","qacha-s-nek-district":"./qacha-s-nek-district/qacha-s-nek-district.js","quthing":"./quthing/quthing.js","thaba-tseka":"./thaba-tseka/thaba-tseka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
