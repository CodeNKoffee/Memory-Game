import React, { useState } from 'react';
import { WinsContext } from './WinsContext';

export const WinsProvider = ({ children }) => {
  const [wins, setWins] = useState(0);

  return (
    <WinsContext.Provider value={[wins, setWins]}>
      {children}
    </WinsContext.Provider>
  );
};
