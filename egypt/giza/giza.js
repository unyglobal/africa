// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giza","repository":"africa","path":"egypt/giza","depth":2,"parent":"egypt","children":["abu-an-numrus","al-ayyat","al-badrashayn","al-bawiti","al-hawamidiyah","as-saff","ash-shaykh-zayid","atfih","awsim","kirdasah","manshiyat-al-qanatir"]});
export const childModules = Object.freeze({"abu-an-numrus":"./abu-an-numrus/abu-an-numrus.js","al-ayyat":"./al-ayyat/al-ayyat.js","al-badrashayn":"./al-badrashayn/al-badrashayn.js","al-bawiti":"./al-bawiti/al-bawiti.js","al-hawamidiyah":"./al-hawamidiyah/al-hawamidiyah.js","as-saff":"./as-saff/as-saff.js","ash-shaykh-zayid":"./ash-shaykh-zayid/ash-shaykh-zayid.js","atfih":"./atfih/atfih.js","awsim":"./awsim/awsim.js","kirdasah":"./kirdasah/kirdasah.js","manshiyat-al-qanatir":"./manshiyat-al-qanatir/manshiyat-al-qanatir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
