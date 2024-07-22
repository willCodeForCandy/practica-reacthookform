import { useForm } from 'react-hook-form';
import './Form.css';
import MisteryBox from '../MisteryBox/MisteryBox';

const Form = ({ formFields, classSwitcher }) => {
  const { handleSubmit, register, formState } = useForm();
  const submitForm = values => {
    classSwitcher('jump');
    console.log(values, formState);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {formFields.map(field => (
        <div key={field.name}>
          <input
            type={field.type}
            {...register(field.name, {
              required: {
                value: true,
                message: 'Debes completar todos los campos',
              },
              pattern: field.pattern,
            })}
          />
          <label htmlFor={field.name}>{field.name}</label>
        </div>
      ))}
      <MisteryBox />
    </form>
  );
};

export default Form;
