// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mbeya","repository":"africa","path":"tanzania/mbeya","depth":2,"parent":"tanzania","children":["chimala","igurusi","ipinda","katumba","kiwira","kyela","makongolosi","matundasi","rujewa","tukuyu","urunda","utengule"]});
export const childModules = Object.freeze({"chimala":"./chimala/chimala.js","igurusi":"./igurusi/igurusi.js","ipinda":"./ipinda/ipinda.js","katumba":"./katumba/katumba.js","kiwira":"./kiwira/kiwira.js","kyela":"./kyela/kyela.js","makongolosi":"./makongolosi/makongolosi.js","matundasi":"./matundasi/matundasi.js","rujewa":"./rujewa/rujewa.js","tukuyu":"./tukuyu/tukuyu.js","urunda":"./urunda/urunda.js","utengule":"./utengule/utengule.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
