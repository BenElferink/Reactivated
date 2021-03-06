import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import HomeIcon from '../../icons/Home';
import QueueIcon from '../../icons/Queue';
import GmailIcon from '../../icons/Gmail';
import TwitterIcon from '../../icons/Twitter';
// import WhatsAppIcon from '../../icons/WhatsApp';

export default function Navbar() {
  const navStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--darkBgDarker)',
    borderRadius: '0 2rem 0 0',
    direction: 'rtl',
  };

  return (
    <nav style={navStyles} className='scroll'>
      <div style={{ height: '30px' }} />
      <NavItem title='Home' path='/' Icon={HomeIcon} />
      <NavItem title='Queue' path='/queue' Icon={QueueIcon} />
      <NavItem title='Gmail' path='/gmail' Icon={GmailIcon} />
      <NavItem title='Twitter' path='/twitter' Icon={TwitterIcon} />
      {/* <NavItem title='WhatsApp' path='/whatsapp' Icon={WhatsAppIcon} /> */}
    </nav>
  );
}

function NavItem({ title, Icon, path }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const ref = useRef(null);

  const selected = pathname === path;

  const itemStyles = {
    padding: '12px 0',
    display: 'flex',
    alignItems: 'center',
    background: selected
      ? 'linear-gradient(to left, var(--accentBlue) -420%, var(--darkBgDarker))'
      : 'unset',
    color: selected ? 'var(--darkTextBold)' : 'var(--darkTextSoft)',
    direction: 'ltr',
    cursor: 'pointer',
  };

  const iconStyles = {
    width: '30px',
    height: '30px',
    margin: '0 25px',
    fill: selected ? 'var(--accentBlue)' : 'var(--darkTextSoft)',
  };

  const doHoverStyles = () => {
    ref.current.style.color = 'var(--darkTextBold)';
    ref.current.style.textDecoration = 'underline';
  };

  const undoHoverStyles = () => {
    ref.current.style.color = 'var(--darkTextSoft)';
    ref.current.style.textDecoration = 'none';
  };

  return (
    <div
      ref={ref}
      style={itemStyles}
      onClick={() => history.push(path)}
      onMouseEnter={doHoverStyles}
      onMouseLeave={undoHoverStyles}>
      <Icon style={iconStyles} />
      <span>{title}</span>
    </div>
  );
}
