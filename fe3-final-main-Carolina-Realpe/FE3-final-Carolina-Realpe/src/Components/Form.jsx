import React, { useState } from 'react';
const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName.length <= 5 || !isValidEmail(formData.email)) {
      setFormError('Por favor verifique su información nuevamente.');
      setFormSuccess(false);
    } else {
      setFormError(null);
      setFormSuccess(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <label htmlFor="fullName">Nombre Completo:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit" >Enviar</button>

      {formError && <p className="error-message">{formError}</p>}
      {formSuccess && (
        <p className="success-message">
          Gracias {formData.fullName}, te contactaremos cuando antes vía mail.
        </p>
      )}
    </form>
  );
};

export default Form;
