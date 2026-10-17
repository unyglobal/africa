// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mpumalanga","repository":"africa","path":"south-africa/mpumalanga","depth":2,"parent":"south-africa","children":["nhlazatje","phola","piet-retief","redhill","sabie","schoemansdal","secunda","siyabuswa","somaroboro","standerton","tekwane","thubelihle","trichardt","vaalbank","volksrust","white-river"]});
export const childModules = Object.freeze({"nhlazatje":"./nhlazatje/nhlazatje.js","phola":"./phola/phola.js","piet-retief":"./piet-retief/piet-retief.js","redhill":"./redhill/redhill.js","sabie":"./sabie/sabie.js","schoemansdal":"./schoemansdal/schoemansdal.js","secunda":"./secunda/secunda.js","siyabuswa":"./siyabuswa/siyabuswa.js","somaroboro":"./somaroboro/somaroboro.js","standerton":"./standerton/standerton.js","tekwane":"./tekwane/tekwane.js","thubelihle":"./thubelihle/thubelihle.js","trichardt":"./trichardt/trichardt.js","vaalbank":"./vaalbank/vaalbank.js","volksrust":"./volksrust/volksrust.js","white-river":"./white-river/white-river.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
