// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tiaret","repository":"africa","path":"algeria/tiaret","depth":2,"parent":"algeria","children":["ain-deheb","frenda","ksar-chellala","mehdia-daira-de-meghila","sougueur"]});
export const childModules = Object.freeze({"ain-deheb":"./ain-deheb/ain-deheb.js","frenda":"./frenda/frenda.js","ksar-chellala":"./ksar-chellala/ksar-chellala.js","mehdia-daira-de-meghila":"./mehdia-daira-de-meghila/mehdia-daira-de-meghila.js","sougueur":"./sougueur/sougueur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
