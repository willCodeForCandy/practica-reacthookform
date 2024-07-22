import { useForm } from 'react-hook-form';
import './Form.css';
import MisteryBox from '../MisteryBox/MisteryBox';

const Form = ({ formFields, classSwitcher }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const submitForm = values => {
    classSwitcher('jump');
    console.log(values);
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
      <div className="alerts">
        {errors.username && <p>{errors.username.message}</p>}
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <MisteryBox />
    </form>
  );
};

export default Form;
