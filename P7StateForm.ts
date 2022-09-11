export const formSet = (form: any, e: any) => {
  form[2]({ ...form[1], ...{ [form[0]]: e.target.value } });
};

export const formGet = (form: any) => {
  return form[1][form[0]];
};
