import 'bootstrap/dist/css/bootstrap.min.css';
import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  return (
    <select className="selectpicker">
      <option value="ru">ru</option>
      <option value="en">en</option>
      <option value="jp">jp</option>
    </select>
  );
};

export default LanguageSwitcher;
