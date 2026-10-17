// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"botswana","repository":"africa","path":"botswana","depth":1,"parent":"","children":["central","city-of-francistown","gaborone","ghanzi","jwaneng","kgatleng","kweneng","lobatse","ngwaketsi","north-west","selibe-phikwe","south-east"]});
export const childModules = Object.freeze({"central":"./central/central.js","city-of-francistown":"./city-of-francistown/city-of-francistown.js","gaborone":"./gaborone/gaborone.js","ghanzi":"./ghanzi/ghanzi.js","jwaneng":"./jwaneng/jwaneng.js","kgatleng":"./kgatleng/kgatleng.js","kweneng":"./kweneng/kweneng.js","lobatse":"./lobatse/lobatse.js","ngwaketsi":"./ngwaketsi/ngwaketsi.js","north-west":"./north-west/north-west.js","selibe-phikwe":"./selibe-phikwe/selibe-phikwe.js","south-east":"./south-east/south-east.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
