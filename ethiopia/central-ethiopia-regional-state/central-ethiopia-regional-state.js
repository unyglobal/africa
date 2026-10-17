// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-ethiopia-regional-state","repository":"africa","path":"ethiopia/central-ethiopia-regional-state","depth":2,"parent":"ethiopia","children":["butajira","ciro","damboya","durame","gimbicho","hadero","hosa-ina","inseno","k-olito","shinshicho","shone","welk-it-e","worabe"]});
export const childModules = Object.freeze({"butajira":"./butajira/butajira.js","ciro":"./ciro/ciro.js","damboya":"./damboya/damboya.js","durame":"./durame/durame.js","gimbicho":"./gimbicho/gimbicho.js","hadero":"./hadero/hadero.js","hosa-ina":"./hosa-ina/hosa-ina.js","inseno":"./inseno/inseno.js","k-olito":"./k-olito/k-olito.js","shinshicho":"./shinshicho/shinshicho.js","shone":"./shone/shone.js","welk-it-e":"./welk-it-e/welk-it-e.js","worabe":"./worabe/worabe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
