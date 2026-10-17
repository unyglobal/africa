// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"larache","repository":"africa","path":"morocco/tanger-tetouan-al-hoceima/larache","depth":3,"parent":"morocco/tanger-tetouan-al-hoceima","children":["bidon-ville","hay-nador","jnane-aztout","sahat-chohada"]});
export const childModules = Object.freeze({"bidon-ville":"./bidon-ville/bidon-ville.js","hay-nador":"./hay-nador/hay-nador.js","jnane-aztout":"./jnane-aztout/jnane-aztout.js","sahat-chohada":"./sahat-chohada/sahat-chohada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
