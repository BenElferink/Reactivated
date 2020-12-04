import React from 'react';

function PersonalBest({ user, difficulty }) {
  const whatToDisplay = () => {
    if (user.sudokuData !== undefined) {
      if (user.sudokuData[`${difficulty}`] !== undefined) {
        let record = user.sudokuData[`${difficulty}`];
        return (
          <>
            <h4>Your record playing '{difficulty}' is:</h4>
            <p>
              {record.timer.minutes} minutes, and {record.timer.seconds} seconds!
              <br />
              {record.resetCount === 0 && record.hintsUsed === 0
                ? 'You perfected your time without reseting and without using hints!'
                : record.resetCount === 0 && record.hintsUsed !== 0
                ? `You used ${record.hintsUsed} hints, without reseting.`
                : record.resetCount !== 0 && record.hintsUsed === 0
                ? `You used ${record.resetCount} resets, without any hints.`
                : `You used ${record.hintsUsed} hints, and reset ${record.resetCount} times.`}
            </p>
          </>
        );
      } else {
        return (
          <>
            <p>
              You haven't played '{difficulty}' mode yet,
              <br />
              what are you waiting for? Let's play!
              <br />
              <br />
              Playing in {difficulty} gives you {difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : 1} hints,
              <br />
              and the board is {difficulty === 'easy' ? 75 : difficulty === 'normal' ? 50 : 25}% complete
            </p>
          </>
        );
      }
    } else {
      return (
        <>
          <p>
            It seems you have never played before... Here's a simple guide to help you choose a difficulty for the first time:
            <br />
            <br />
          </p>
          <table>
            <thead>
              <tr>
                <th />
                <th>hints</th>
                <th>complete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='diff'>Easy:</td>
                <td>3</td>
                <td>75%</td>
              </tr>

              <tr>
                <td className='diff'>Normal:</td>
                <td>2</td>
                <td>50%</td>
              </tr>

              <tr>
                <td className='diff'>Hard:</td>
                <td>1</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
  };

  return <div className='personal-best'>{whatToDisplay()}</div>;
}

export default PersonalBest;
