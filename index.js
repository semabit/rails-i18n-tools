// key building
export const i18nArAttr = (key) => `activerecord.attributes.${key}`;
export const i18nArModel = (key) => `activerecord.models.${key}`;
export const i18nValue = (key) => `values.${key}`;
export const i18nBool = (value) => value ? `values.boolean.true` : `values.boolean.false`;

// other helpers
export const toSnakeCase = (str) => {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase();
};
