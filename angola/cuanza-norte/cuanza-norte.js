// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuanza-norte","repository":"africa","path":"angola/cuanza-norte","depth":2,"parent":"angola","children":["camabatela","golungo-alto","lucala","n-dalatando","nzagi"]});
export const childModules = Object.freeze({"camabatela":"./camabatela/camabatela.js","golungo-alto":"./golungo-alto/golungo-alto.js","lucala":"./lucala/lucala.js","n-dalatando":"./n-dalatando/n-dalatando.js","nzagi":"./nzagi/nzagi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
