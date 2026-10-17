// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nampula","repository":"africa","path":"mozambique/nampula","depth":2,"parent":"mozambique","children":["angoche","iapala","malema","micolene","monapo","mossuril","mozambique","murrupula","mutuali","nacala","namapa-erati","nametil","namialo","ribaue"]});
export const childModules = Object.freeze({"angoche":"./angoche/angoche.js","iapala":"./iapala/iapala.js","malema":"./malema/malema.js","micolene":"./micolene/micolene.js","monapo":"./monapo/monapo.js","mossuril":"./mossuril/mossuril.js","mozambique":"./mozambique/mozambique.js","murrupula":"./murrupula/murrupula.js","mutuali":"./mutuali/mutuali.js","nacala":"./nacala/nacala.js","namapa-erati":"./namapa-erati/namapa-erati.js","nametil":"./nametil/nametil.js","namialo":"./namialo/namialo.js","ribaue":"./ribaue/ribaue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
