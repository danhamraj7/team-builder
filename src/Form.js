import React, { useState } from "react";

function Form(props) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.getTeamListSetter([...props.getTeamList, form]);

    setForm({ name: "", email: "", role: "" });
  };

  return (
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
