// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vakinankaratra","repository":"africa","path":"madagascar/vakinankaratra","depth":2,"parent":"madagascar","children":["ambatolampy","antanifotsy","antsirabe","betafo","faratsiho","miandrarivo","soanindrariny"]});
export const childModules = Object.freeze({"ambatolampy":"./ambatolampy/ambatolampy.js","antanifotsy":"./antanifotsy/antanifotsy.js","antsirabe":"./antsirabe/antsirabe.js","betafo":"./betafo/betafo.js","faratsiho":"./faratsiho/faratsiho.js","miandrarivo":"./miandrarivo/miandrarivo.js","soanindrariny":"./soanindrariny/soanindrariny.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
