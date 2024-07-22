import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { formFields } from './data/formFields';
import Mario from './components/Mario/Mario';

function App() {
  const [marioClass, setMarioClass] = useState('');
  return (
    <>
      <Header />

      <Form formFields={formFields} classSwitcher={setMarioClass} />
      <Mario className={marioClass} />
    </>
  );
}

export default App;
