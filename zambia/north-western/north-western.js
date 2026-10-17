// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-western","repository":"africa","path":"zambia/north-western","depth":2,"parent":"zambia","children":["chavuma","chisasa","kabompo","kansanshi","kasempa","manyama","manyinga","mufumbwe","mwinilunga","solwezi","zambezi"]});
export const childModules = Object.freeze({"chavuma":"./chavuma/chavuma.js","chisasa":"./chisasa/chisasa.js","kabompo":"./kabompo/kabompo.js","kansanshi":"./kansanshi/kansanshi.js","kasempa":"./kasempa/kasempa.js","manyama":"./manyama/manyama.js","manyinga":"./manyinga/manyinga.js","mufumbwe":"./mufumbwe/mufumbwe.js","mwinilunga":"./mwinilunga/mwinilunga.js","solwezi":"./solwezi/solwezi.js","zambezi":"./zambezi/zambezi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
