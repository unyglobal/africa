// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"angola","repository":"africa","path":"angola","depth":1,"parent":"","children":["bengo","benguela","bie","cabinda","cambundi","cambundi-a","cazombo","cazombo-a","cuanza-norte","cubango","cunene","dondo","dondo-a","huambo","huila","kwanza-sul","luanda","luanda-norte","lunda-sul","malanje","moxico","namibe","uige","zaire"]});
export const childModules = Object.freeze({"bengo":"./bengo/bengo.js","benguela":"./benguela/benguela.js","bie":"./bie/bie.js","cabinda":"./cabinda/cabinda.js","cambundi":"./cambundi/cambundi.js","cambundi-a":"./cambundi-a/cambundi-a.js","cazombo":"./cazombo/cazombo.js","cazombo-a":"./cazombo-a/cazombo-a.js","cuanza-norte":"./cuanza-norte/cuanza-norte.js","cubango":"./cubango/cubango.js","cunene":"./cunene/cunene.js","dondo":"./dondo/dondo.js","dondo-a":"./dondo-a/dondo-a.js","huambo":"./huambo/huambo.js","huila":"./huila/huila.js","kwanza-sul":"./kwanza-sul/kwanza-sul.js","luanda":"./luanda/luanda.js","luanda-norte":"./luanda-norte/luanda-norte.js","lunda-sul":"./lunda-sul/lunda-sul.js","malanje":"./malanje/malanje.js","moxico":"./moxico/moxico.js","namibe":"./namibe/namibe.js","uige":"./uige/uige.js","zaire":"./zaire/zaire.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
