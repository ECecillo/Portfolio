import { ThemeMutator, useTheme } from '@/ui/context/theme-provider';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';

const controls = (setTheme: ThemeMutator) => [
  {
    icon: <AiOutlineGlobal size="2rem" />,
    link: '/',
    onClick: () => {
      console.log('Change language 🌍');
      // changeLanguage();
    },
  },
  {
    icon: <FiMoon size="2rem" />,
    onClick: () => {
      console.log('Change theme 🎨');
      setTheme('dark');
    },
  },
];

function ControlList() {
  const { setTheme } = useTheme();
  return controls(setTheme).map((control, index) => (
    <a
      key={index}
      href={control.link}
      onClick={control.onClick}
      style={{ cursor: 'pointer' }}>
      {control.icon}
    </a>
  ));
}

export default ControlList;
