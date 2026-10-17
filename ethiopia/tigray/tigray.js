// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tigray","repository":"africa","path":"ethiopia/tigray","depth":2,"parent":"ethiopia","children":["abala","abiy-adi","adebaye","adigrat","adwa","aksum","alamata","dolo","idaga-hamus","inda-silase","indabaguna","intich-o","korem","may-cadera","maych-ew","mek-ele","sheraro","wik-ro"]});
export const childModules = Object.freeze({"abala":"./abala/abala.js","abiy-adi":"./abiy-adi/abiy-adi.js","adebaye":"./adebaye/adebaye.js","adigrat":"./adigrat/adigrat.js","adwa":"./adwa/adwa.js","aksum":"./aksum/aksum.js","alamata":"./alamata/alamata.js","dolo":"./dolo/dolo.js","idaga-hamus":"./idaga-hamus/idaga-hamus.js","inda-silase":"./inda-silase/inda-silase.js","indabaguna":"./indabaguna/indabaguna.js","intich-o":"./intich-o/intich-o.js","korem":"./korem/korem.js","may-cadera":"./may-cadera/may-cadera.js","maych-ew":"./maych-ew/maych-ew.js","mek-ele":"./mek-ele/mek-ele.js","sheraro":"./sheraro/sheraro.js","wik-ro":"./wik-ro/wik-ro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
