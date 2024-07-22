import './MisteryBox.css';

const MisteryBox = ({ type = 'submit' }) => {
  return <button className="mistery-box" type={type}></button>;
};

export default MisteryBox;
