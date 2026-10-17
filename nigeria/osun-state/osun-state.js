// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"osun-state","repository":"africa","path":"nigeria/osun-state","depth":2,"parent":"nigeria","children":["apomu","ede","ejigbo","gbongan","ijebu-jesa","ikire","ikirun","ila-orangun","ile-ife","ilesa","ilobu","inisa","iwo","modakeke","oke-mesi","olupona","osogbo","otan-ayegbaju","oyan"]});
export const childModules = Object.freeze({"apomu":"./apomu/apomu.js","ede":"./ede/ede.js","ejigbo":"./ejigbo/ejigbo.js","gbongan":"./gbongan/gbongan.js","ijebu-jesa":"./ijebu-jesa/ijebu-jesa.js","ikire":"./ikire/ikire.js","ikirun":"./ikirun/ikirun.js","ila-orangun":"./ila-orangun/ila-orangun.js","ile-ife":"./ile-ife/ile-ife.js","ilesa":"./ilesa/ilesa.js","ilobu":"./ilobu/ilobu.js","inisa":"./inisa/inisa.js","iwo":"./iwo/iwo.js","modakeke":"./modakeke/modakeke.js","oke-mesi":"./oke-mesi/oke-mesi.js","olupona":"./olupona/olupona.js","osogbo":"./osogbo/osogbo.js","otan-ayegbaju":"./otan-ayegbaju/otan-ayegbaju.js","oyan":"./oyan/oyan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
