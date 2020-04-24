import React from 'react';
import './FormField.css';

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: Function;
  onBlur: Function;
  required?: boolean;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  required = false,
  placeholder = '',
  hasError = false,
  errorMessage = '',
}) => {
  const nonInputTypes: Array<string> = ['textarea', 'select', 'checkbox'];

  const handleChange = (event: any) => {
    onChange(event);
  };

  const handleBlur = (event: any) => {
    onBlur(event);
  };

  const wrapperClassNameValue = hasError ? 'form-field error' : 'form-field';
  const labelClassNameValue = required
    ? 'form-field--label required'
    : 'form-field--label';

  return (
    <div className={wrapperClassNameValue}>
      {!nonInputTypes.includes(type) && (
        <>
          <label htmlFor={name} className={labelClassNameValue}>
            {label}
            <span className="if-required">*</span>
          </label>
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
          />
          {hasError && (
            <div className="form-field--error-message">{errorMessage}</div>
          )}
        </>
      )}
    </div>
  );
};

export default FormField;
