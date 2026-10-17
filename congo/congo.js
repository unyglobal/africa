// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"congo","repository":"africa","path":"congo","depth":1,"parent":"","children":["bouenza","brazzaville","cuvette","lekoumou","likouala","niari","plateaux","pointe-noire","sangha"]});
export const childModules = Object.freeze({"bouenza":"./bouenza/bouenza.js","brazzaville":"./brazzaville/brazzaville.js","cuvette":"./cuvette/cuvette.js","lekoumou":"./lekoumou/lekoumou.js","likouala":"./likouala/likouala.js","niari":"./niari/niari.js","plateaux":"./plateaux/plateaux.js","pointe-noire":"./pointe-noire/pointe-noire.js","sangha":"./sangha/sangha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
