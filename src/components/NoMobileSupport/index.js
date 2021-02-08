import styles from './styles/NoMobileSupport.module.css';
import NoMobile from './icons/no-mobile.svg';

export default function MobileError() {
  return (
    <div className={styles.component}>
      <img src={NoMobile} alt='NO MOBILE SUPPORT' />
      <p>
        Reactivated.io does not support mobile yet,
        <br />
        please use a larger screen (min-width 768px)
      </p>
    </div>
  );
}
