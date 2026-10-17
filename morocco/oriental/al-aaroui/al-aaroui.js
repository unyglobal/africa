// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-aaroui","repository":"africa","path":"morocco/oriental/al-aaroui","depth":3,"parent":"morocco/oriental","children":["commune-pachalik","hay-bouyleghmane","hay-jdid","hay-lqods","hay-souq-chamali","hay-souq-lgharbi","hay-souq-ljanoubi"]});
export const childModules = Object.freeze({"commune-pachalik":"./commune-pachalik/commune-pachalik.js","hay-bouyleghmane":"./hay-bouyleghmane/hay-bouyleghmane.js","hay-jdid":"./hay-jdid/hay-jdid.js","hay-lqods":"./hay-lqods/hay-lqods.js","hay-souq-chamali":"./hay-souq-chamali/hay-souq-chamali.js","hay-souq-lgharbi":"./hay-souq-lgharbi/hay-souq-lgharbi.js","hay-souq-ljanoubi":"./hay-souq-ljanoubi/hay-souq-ljanoubi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
