/*
  P7 State Form Helper
  https://github.com/PostType7/P7-State-Form
*/

/* 
  TODO: for contributors,
  form array type always is: ['string: field key', {form data state}, formDataSetState()] 
*/
export const fieldKey = (form: any[]) => form[0];

export const formSet = (
  form: any[],
  e: React.ChangeEvent<HTMLInputElement>
) => {
  /* deep mode */
  const out = Object.assign({}, form[1]);
  deepSet(out, form[0], e.target.value);
  form[2](out);
  /* flat mode */
  /* form[2]({ ...form[1], ...{ [form[0]]: e.target.value } }); */ 
};

export const formGet = (form: any[]) => {
  return deepGet(form[1], form[0]);
};

export const deepSet = (obj: any, path: string, val: any) => {
  const keys = path.split("."),
    lastKey = keys.pop(),
    lastObj = keys.reduce(
      (obj: any, key: any) => (obj[key] = obj[key] || {}),
      obj
    );
  lastObj[lastKey!] = val;
};

export const deepGet = (obj: any, path: string) => {
  let e = Array.isArray(path)
      ? path
      : typeof path === "string"
      ? path.split(".")
      : path,
    v,
    i;
  for (v = obj, i = 0; v && i < e.length; ++i) v = v[e[i]]
  return v;
};
