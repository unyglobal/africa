// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"koulikoro","repository":"africa","path":"mali/koulikoro","depth":2,"parent":"mali","children":["banamba","dialakorodji","dioila","fana","kabala","kalaban-koro","kangaba","kati","kolokani","moribabougou","nara","sangarebougou","sibi","sirakoro-meguetana","toubakoura"]});
export const childModules = Object.freeze({"banamba":"./banamba/banamba.js","dialakorodji":"./dialakorodji/dialakorodji.js","dioila":"./dioila/dioila.js","fana":"./fana/fana.js","kabala":"./kabala/kabala.js","kalaban-koro":"./kalaban-koro/kalaban-koro.js","kangaba":"./kangaba/kangaba.js","kati":"./kati/kati.js","kolokani":"./kolokani/kolokani.js","moribabougou":"./moribabougou/moribabougou.js","nara":"./nara/nara.js","sangarebougou":"./sangarebougou/sangarebougou.js","sibi":"./sibi/sibi.js","sirakoro-meguetana":"./sirakoro-meguetana/sirakoro-meguetana.js","toubakoura":"./toubakoura/toubakoura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
