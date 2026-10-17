// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"namibia","repository":"africa","path":"namibia","depth":1,"parent":"","children":["erongo-region","hardap-region","karas-region","kavango-east","khomas-region","ohangwena-region","omaheke-region","oshana-region","oshikoto-region","otjozondjupa-region","zambezi-region"]});
export const childModules = Object.freeze({"erongo-region":"./erongo-region/erongo-region.js","hardap-region":"./hardap-region/hardap-region.js","karas-region":"./karas-region/karas-region.js","kavango-east":"./kavango-east/kavango-east.js","khomas-region":"./khomas-region/khomas-region.js","ohangwena-region":"./ohangwena-region/ohangwena-region.js","omaheke-region":"./omaheke-region/omaheke-region.js","oshana-region":"./oshana-region/oshana-region.js","oshikoto-region":"./oshikoto-region/oshikoto-region.js","otjozondjupa-region":"./otjozondjupa-region/otjozondjupa-region.js","zambezi-region":"./zambezi-region/zambezi-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
