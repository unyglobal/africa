// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ekiti-state","repository":"africa","path":"nigeria/ekiti-state","depth":2,"parent":"nigeria","children":["ado-ekiti","aramoko-ekiti","efon-alaaye","emure-ekiti","igbara-odo","igede-ekiti","ijero-ekiti","ikere-ekiti","ipoti","ise-ekiti","oke-ila"]});
export const childModules = Object.freeze({"ado-ekiti":"./ado-ekiti/ado-ekiti.js","aramoko-ekiti":"./aramoko-ekiti/aramoko-ekiti.js","efon-alaaye":"./efon-alaaye/efon-alaaye.js","emure-ekiti":"./emure-ekiti/emure-ekiti.js","igbara-odo":"./igbara-odo/igbara-odo.js","igede-ekiti":"./igede-ekiti/igede-ekiti.js","ijero-ekiti":"./ijero-ekiti/ijero-ekiti.js","ikere-ekiti":"./ikere-ekiti/ikere-ekiti.js","ipoti":"./ipoti/ipoti.js","ise-ekiti":"./ise-ekiti/ise-ekiti.js","oke-ila":"./oke-ila/oke-ila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
