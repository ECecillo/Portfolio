import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const socialIcons = [
  {
    icon: <AiFillGithub size="2rem" />,
    link: 'https://github.com/ececillo',
  },
  {
    icon: <AiFillTwitterCircle size="2rem" />,
    link: 'https://twitter.com/EnzoCECILLON1',
  },
  {
    icon: <AiFillLinkedin size="2rem" />,
    link: 'www.linkedin.com/in/ececillo',
  },
];

function SocialList() {
  return socialIcons.map((socialIcon, index) => (
    <a key={index} href={socialIcon.link} style={{ cursor: 'pointer' }}>
      {socialIcon.icon}
    </a>
  ));
}

export default SocialList;
