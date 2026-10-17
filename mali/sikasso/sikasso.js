// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sikasso","repository":"africa","path":"mali/sikasso","depth":2,"parent":"mali","children":["bougouni","finnkolo","kadiolo","kouri","koutiala","massiogo","yanfolila","yorosso","zegoua"]});
export const childModules = Object.freeze({"bougouni":"./bougouni/bougouni.js","finnkolo":"./finnkolo/finnkolo.js","kadiolo":"./kadiolo/kadiolo.js","kouri":"./kouri/kouri.js","koutiala":"./koutiala/koutiala.js","massiogo":"./massiogo/massiogo.js","yanfolila":"./yanfolila/yanfolila.js","yorosso":"./yorosso/yorosso.js","zegoua":"./zegoua/zegoua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
