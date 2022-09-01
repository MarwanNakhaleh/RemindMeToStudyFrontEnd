import { Form, Field } from "easy-react-form";

export default function UserForm({}) {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <Field
        name="phone"
        component="input"
        type="tel"
        placeholder="Enter phone number"
      />

      <button> Submit </button>
    </Form>
  );
}
