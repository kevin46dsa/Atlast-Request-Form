import React, { useState } from 'react';
import Formservice from '../../Service/Formservice';

function Form() {
  const [formData, setFormData] = useState({
    textInput: '',
    textareaInput: '',
    selectInput: '',
    checkboxInput: false,
    radioInput: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = (values) => {
    const alpha = /^[0-9]+$/;
    let errors = {};
    if (!values.rating) {
      errors.rating = "Rating is required";
    }
    if (!values.feedback) {
      errors.feedback = "Feedback is required";
    }
    const flag = alpha.test(values.feedback);
    if (flag === true) {
      errors.feedback = "Feedback cannot be just Numerical!";
    }
    return errors;
  };




  const handleSubmit = async (event) => {
    
    //setError("");
    //setSuccess("");
    event.preventDefault();
    console.log(formData); // or send form data to server
    //let error = await validate(formValues);

    //await setFormErrors(error);
    //if (Object.keys(error).length === 0) {
        Formservice.postUserForm(formData)
        .then((data) => {
          //setSuccess("Review added successfully !");
          //setReload(true);
          console.log("Success")
        })
        .catch((e) => {
          //setError(`Opps, something went wrong :${e}`);
          console.log("Error")
        });
    //}
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text Input:
        <input
          type="text"
          name="textInput"
          value={formData.textInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Textarea:
        <textarea
          name="textareaInput"
          value={formData.textareaInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Select:
        <select
          name="selectInput"
          value={formData.selectInput}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <br />

      <label>
        Checkbox:
        <input
          type="checkbox"
          name="checkboxInput"
          checked={formData.checkboxInput}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Radio:
        <label>
          Option 1
          <input
            type="radio"
            name="radioInput"
            value="option1"
            checked={formData.radioInput === 'option1'}
            onChange={handleChange}
          />
        </label>
        <label>
          Option 2
          <input
            type="radio"
            name="radioInput"
            value="option2"
            checked={formData.radioInput === 'option2'}
            onChange={handleChange}
          />
        </label>
        <label>
          Option 3
          <input
            type="radio"
            name="radioInput"
            value="option3"
            checked={formData.radioInput === 'option3'}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
