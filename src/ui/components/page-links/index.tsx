//FIXME: use transaltion
const links = [
  {
    label: 'Portrait',
    link: '/#portrait',
  },
  {
    label: 'Projets',
    link: '/#projects',
  },
];
function PageLinks() {
  return links.map((link, index) => (
    <a key={index} href={link.link} style={{ cursor: 'pointer' }}>
      {link.label}
    </a>
  ));
}

export default PageLinks;
