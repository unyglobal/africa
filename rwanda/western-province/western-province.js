// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"western-province","repository":"africa","path":"rwanda/western-province","depth":2,"parent":"rwanda","children":["bugarama","bushekeri","bushenge","cyangugu","cyato","gihombo","gisenyi","gitesi","kagano","karambi","karengera","kibuye","kirambo","kirimbi","kora","macuba","mahembe","mukamira","ngororero","nyabitekeli","rangiro","shangi"]});
export const childModules = Object.freeze({"bugarama":"./bugarama/bugarama.js","bushekeri":"./bushekeri/bushekeri.js","bushenge":"./bushenge/bushenge.js","cyangugu":"./cyangugu/cyangugu.js","cyato":"./cyato/cyato.js","gihombo":"./gihombo/gihombo.js","gisenyi":"./gisenyi/gisenyi.js","gitesi":"./gitesi/gitesi.js","kagano":"./kagano/kagano.js","karambi":"./karambi/karambi.js","karengera":"./karengera/karengera.js","kibuye":"./kibuye/kibuye.js","kirambo":"./kirambo/kirambo.js","kirimbi":"./kirimbi/kirimbi.js","kora":"./kora/kora.js","macuba":"./macuba/macuba.js","mahembe":"./mahembe/mahembe.js","mukamira":"./mukamira/mukamira.js","ngororero":"./ngororero/ngororero.js","nyabitekeli":"./nyabitekeli/nyabitekeli.js","rangiro":"./rangiro/rangiro.js","shangi":"./shangi/shangi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
