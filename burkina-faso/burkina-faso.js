// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burkina-faso","repository":"africa","path":"burkina-faso","depth":1,"parent":"","children":["boucle-du-mouhoun","cascades-region","centre","centre-est","centre-nord","centre-ouest","centre-sud","est","hauts-bassins","nord","plateau-central","sahel","sud-ouest"]});
export const childModules = Object.freeze({"boucle-du-mouhoun":"./boucle-du-mouhoun/boucle-du-mouhoun.js","cascades-region":"./cascades-region/cascades-region.js","centre":"./centre/centre.js","centre-est":"./centre-est/centre-est.js","centre-nord":"./centre-nord/centre-nord.js","centre-ouest":"./centre-ouest/centre-ouest.js","centre-sud":"./centre-sud/centre-sud.js","est":"./est/est.js","hauts-bassins":"./hauts-bassins/hauts-bassins.js","nord":"./nord/nord.js","plateau-central":"./plateau-central/plateau-central.js","sahel":"./sahel/sahel.js","sud-ouest":"./sud-ouest/sud-ouest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
