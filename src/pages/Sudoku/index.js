import { useState } from 'react';
import styles from './styles/Sudoku.module.css';
import GithubButton from '../../components/GithubButton';
import { LinearProgress } from '@material-ui/core';

export default function Sudoku() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className={styles.component}>
      {isLoading && <LinearProgress color='primary' className={styles.progress} />}

      <iframe
        src='https://belferink1996.github.io/sudoku-game'
        title='Sudoku'
        frameBorder='0'
        className={styles.iframe}
        onLoad={() => setIsLoading(false)}
      />

      <GithubButton href='https://github.com/belferink1996/sudoku-game' />
    </main>
  );
}
