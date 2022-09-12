
/*
  P7 State Form Helper
  https://github.com/PostType7/P7-State-Form
*/

/* 
  TODO: for contributors,
  form array type always is: ['string: field key', {form data state}, formDataSetState()] 
*/
export const fieldKey = (form: any[]) => form[0]

export const formSet = (form: any[] , e: React.ChangeEvent<HTMLInputElement>) => {
  form[2]({ ...form[1], ...{ [form[0]]: e.target.value } });
};

export const formGet = (form: any[]) => {
  return form[1][form[0]];
};


