import { Fragment, useState } from 'react';
import styles from './styles/Iframe.module.css';
import { LinearProgress } from '@material-ui/core';

export default function Iframe({ title, src }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Fragment>
      {isLoading && <LinearProgress color='primary' className={styles.progress} />}
      <iframe
        src={src}
        title={title}
        frameborder='0'
        className={styles.iframe}
        onLoad={() => setIsLoading(false)}
      />
    </Fragment>
  );
}
