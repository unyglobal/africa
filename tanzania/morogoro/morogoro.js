// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morogoro","repository":"africa","path":"tanzania/morogoro","depth":2,"parent":"tanzania","children":["dumila","geiro","ifakara","kidatu","kidodi","kilosa","lubata","madizini","magole","malinyi","mikumi","mlimba","msowero","ngerengere","ruaha"]});
export const childModules = Object.freeze({"dumila":"./dumila/dumila.js","geiro":"./geiro/geiro.js","ifakara":"./ifakara/ifakara.js","kidatu":"./kidatu/kidatu.js","kidodi":"./kidodi/kidodi.js","kilosa":"./kilosa/kilosa.js","lubata":"./lubata/lubata.js","madizini":"./madizini/madizini.js","magole":"./magole/magole.js","malinyi":"./malinyi/malinyi.js","mikumi":"./mikumi/mikumi.js","mlimba":"./mlimba/mlimba.js","msowero":"./msowero/msowero.js","ngerengere":"./ngerengere/ngerengere.js","ruaha":"./ruaha/ruaha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
