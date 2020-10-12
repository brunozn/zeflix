import React from 'react';

// import { Container } from './styles';

function FormField({ name, value, label, onChange, type }) {
  return (
    <div>
      <label>
        {label}:
        <input type={type} value={value.name} name={name} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
