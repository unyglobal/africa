// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-ethiopia-regional-state","repository":"africa","path":"ethiopia/south-ethiopia-regional-state","depth":2,"parent":"ethiopia","children":["arba-minch","areka","badessa","bako","bale-hawassa","boditi","ch-ench-a","dila","dimtu","felege-neway","gasuba","gidole","gununo","jinka","shanto","sodo","tebela","wenago","yirga-ch-efe"]});
export const childModules = Object.freeze({"arba-minch":"./arba-minch/arba-minch.js","areka":"./areka/areka.js","badessa":"./badessa/badessa.js","bako":"./bako/bako.js","bale-hawassa":"./bale-hawassa/bale-hawassa.js","boditi":"./boditi/boditi.js","ch-ench-a":"./ch-ench-a/ch-ench-a.js","dila":"./dila/dila.js","dimtu":"./dimtu/dimtu.js","felege-neway":"./felege-neway/felege-neway.js","gasuba":"./gasuba/gasuba.js","gidole":"./gidole/gidole.js","gununo":"./gununo/gununo.js","jinka":"./jinka/jinka.js","shanto":"./shanto/shanto.js","sodo":"./sodo/sodo.js","tebela":"./tebela/tebela.js","wenago":"./wenago/wenago.js","yirga-ch-efe":"./yirga-ch-efe/yirga-ch-efe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
