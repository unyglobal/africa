// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luanda","repository":"africa","path":"angola/luanda","depth":2,"parent":"angola","children":["benfica","cacuaco","camama","cazenga","golfe","hoji-ya-henda","ingombota","kikolo","kilamba","kima-kieza","maianga","mulenvos","nova-vida","ramiros","rangel","samba","sambizanga","talatona","viana","vila-flor","zango"]});
export const childModules = Object.freeze({"benfica":"./benfica/benfica.js","cacuaco":"./cacuaco/cacuaco.js","camama":"./camama/camama.js","cazenga":"./cazenga/cazenga.js","golfe":"./golfe/golfe.js","hoji-ya-henda":"./hoji-ya-henda/hoji-ya-henda.js","ingombota":"./ingombota/ingombota.js","kikolo":"./kikolo/kikolo.js","kilamba":"./kilamba/kilamba.js","kima-kieza":"./kima-kieza/kima-kieza.js","maianga":"./maianga/maianga.js","mulenvos":"./mulenvos/mulenvos.js","nova-vida":"./nova-vida/nova-vida.js","ramiros":"./ramiros/ramiros.js","rangel":"./rangel/rangel.js","samba":"./samba/samba.js","sambizanga":"./sambizanga/sambizanga.js","talatona":"./talatona/talatona.js","viana":"./viana/viana.js","vila-flor":"./vila-flor/vila-flor.js","zango":"./zango/zango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
