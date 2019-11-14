import React, { useState } from "react";

function Form(props) {
  // Added state
  //These values has to be entered by the user and empty strings will clear
  // form fields on submit.
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  //Added onChange handler and function to handle the way
  //the data is handled when the user enter it in the form.

  //ADD spread Oper will take whatever exist in the stored result and append
  // the new entry to it.

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.getTeamListSetter([...props.getTeamList, form]);

    setForm({ name: "", email: "", role: "" });
  };

  return (
    // event handler is on the form because the whole form is been submitted.

    <form onSubmit={event => handleSubmit(event)}>
      <p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={event => handleChange(event)}
          />
        </label>
      </p>

      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={event => handleChange(event)}
          />
        </label>
      </p>

      <p>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={event => handleChange(event)}
          />
        </label>
      </p>

      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default Form;
