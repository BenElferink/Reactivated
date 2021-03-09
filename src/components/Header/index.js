import { useState } from 'react';
import AlienIcon from '../../icons/Alien';
import Button from '../Button';
import ContactModal from '../Modal/ContactModal';

export default function Header() {
  const [contactModal, setContactModal] = useState(false);

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const brandStyles = {
    padding: '15px 20px',
    margin: '0 0 0 25px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--darkBgDarker)',
    border: 'none',
    borderRadius: '1rem',
    color: 'var(--darkTextBold)',
    fontFamily: 'monospace',
    fontSize: '16px',
  };

  const iconStyles = {
    width: '30px',
    height: '30px',
    marginRight: '7px',
  };

  const contactStyles = {
    width: '300px',
    height: '100%',
    margin: '0 0 0 auto',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'var(--darkBgDarker)',
    borderRadius: '0 0 0 1rem',
  };

  return (
    <header style={headerStyles}>
      <div style={brandStyles}>
        <AlienIcon style={iconStyles} />
        reactivated.dev
      </div>

      <div style={contactStyles}>
        <Button invertStyle onClick={() => setContactModal(true)}>
          Contact Me
        </Button>

        {contactModal && <ContactModal closeModal={() => setContactModal(false)} />}
      </div>
    </header>
  );
}
