import Brand from '../Brand';
import ContactMe from '../ContactMe';

export default function Header() {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <header style={headerStyles}>
      <Brand />
      <ContactMe />
    </header>
  );
}
