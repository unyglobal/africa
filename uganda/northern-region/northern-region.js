// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-region","repository":"africa","path":"uganda/northern-region","depth":2,"parent":"uganda","children":["abim","adjumani","anaka","apac","arua","dokolo","gulu","kitgum","koboko","kotido","lira","moroto","moyo","nebbi","opit","paidha","pakwach","yumbe"]});
export const childModules = Object.freeze({"abim":"./abim/abim.js","adjumani":"./adjumani/adjumani.js","anaka":"./anaka/anaka.js","apac":"./apac/apac.js","arua":"./arua/arua.js","dokolo":"./dokolo/dokolo.js","gulu":"./gulu/gulu.js","kitgum":"./kitgum/kitgum.js","koboko":"./koboko/koboko.js","kotido":"./kotido/kotido.js","lira":"./lira/lira.js","moroto":"./moroto/moroto.js","moyo":"./moyo/moyo.js","nebbi":"./nebbi/nebbi.js","opit":"./opit/opit.js","paidha":"./paidha/paidha.js","pakwach":"./pakwach/pakwach.js","yumbe":"./yumbe/yumbe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
