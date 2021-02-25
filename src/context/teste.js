import { createContext, useState, ReactNode } from 'react'; // utilizando context
import challenges from '../../challenges.json';

export const ChallengesContext = createContext()
//enviado para App.tsx;

export const ChallengesProvider = ({ children }) => {

    return (
        <ChallengesContext.Provider value={{
          
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}