# P7-State-Form
Ultra light typescript form helper, based on pure react methods (~0.4Kb core lib file)

# Install

`yarn add @dadmor/p7-state-form`
`npm install @dadmor/p7-state-form`

# Basic usage 

InputComponent.tsx
```js
import { formGet, formSet } from "@dadmor/p7-state-form";
interface Props {
  form?: any[];
  type?: string;
}
export const InputComponent: React.FC<Props> = ({
  form,
  type = "text",
}) => {
  return (
      <input
        id={form[0]}
        onChange={(e) => formSet(form, e )}
        defaultValue={formGet(form)}
        type={type}
      />
  );
};
```

Page.tsx

```js
interface FormDataType {
    identifier: string;
    password: string;
}

const [formData, setFormData] = useState<FormDataType>({
    identifier: "",
    password: "",
});

const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('formData', formData)
}

return (
    <form onSubmit={onSubmitHandler}>

        <label>Identifier</label>
        <InputComponent form={["identifier", formData, setFormData]} />

        <label>Identifier</label>
        <InputComponent form={["password", formData, setFormData]} />

    </form>
)
```

# More examples (codesandbox)

* [Basic usage (without TypeScript)](https://codesandbox.io/s/p7-state-form-basic-example-bnjknw?file=/src/App.js)



# TODO

- [x] (Extend to recursive form data)

# NPM
https://www.npmjs.com/package/@dadmor/p7-state-form

# Footnotes

 - NPM tutorail:
https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/


