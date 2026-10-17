// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"littoral","repository":"africa","path":"cameroon/littoral","depth":2,"parent":"cameroon","children":["dizangue","douala","edea","loum","manjo","mbanga","melong","njombe","nkongsamba","penja","souza-gare"]});
export const childModules = Object.freeze({"dizangue":"./dizangue/dizangue.js","douala":"./douala/douala.js","edea":"./edea/edea.js","loum":"./loum/loum.js","manjo":"./manjo/manjo.js","mbanga":"./mbanga/mbanga.js","melong":"./melong/melong.js","njombe":"./njombe/njombe.js","nkongsamba":"./nkongsamba/nkongsamba.js","penja":"./penja/penja.js","souza-gare":"./souza-gare/souza-gare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
