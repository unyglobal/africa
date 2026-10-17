// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ondo-state","repository":"africa","path":"nigeria/ondo-state","depth":2,"parent":"nigeria","children":["akure","idanre","ikare","ode","ondo","owo"]});
export const childModules = Object.freeze({"akure":"./akure/akure.js","idanre":"./idanre/idanre.js","ikare":"./ikare/ikare.js","ode":"./ode/ode.js","ondo":"./ondo/ondo.js","owo":"./owo/owo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
