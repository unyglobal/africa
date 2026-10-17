// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lqoliaa","repository":"africa","path":"morocco/souss-massa/lqoliaa","depth":3,"parent":"morocco/souss-massa","children":["douar-alt-rami","douar-aribat","douar-lhaj-tayla","dr-laamar","hay-bou-l-kraker"]});
export const childModules = Object.freeze({"douar-alt-rami":"./douar-alt-rami/douar-alt-rami.js","douar-aribat":"./douar-aribat/douar-aribat.js","douar-lhaj-tayla":"./douar-lhaj-tayla/douar-lhaj-tayla.js","dr-laamar":"./dr-laamar/dr-laamar.js","hay-bou-l-kraker":"./hay-bou-l-kraker/hay-bou-l-kraker.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
