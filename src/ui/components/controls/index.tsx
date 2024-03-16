import { Theme, ThemeMutator, useTheme } from '@/ui/context/theme-provider';
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
    onClick: (currentTheme: Theme) => {
      console.log('Change theme 🎨');
      const currentThemeToStateMutation = {
        dark: () => setTheme('light'),
        light: () => setTheme('dark'),
        system: () => null,
      };
      currentThemeToStateMutation[currentTheme]();
    },
  },
];

function ControlList() {
  const { theme: currentTheme, setTheme } = useTheme();
  return controls(setTheme).map((control, index) => (
    <a
      key={index}
      href={control.link}
      onClick={() => control.onClick(currentTheme)}
      style={{ cursor: 'pointer' }}>
      {control.icon}
    </a>
  ));
}

export default ControlList;
