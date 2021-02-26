import { createContext, useState } from 'react'; // utilizando context

export const ChallengesContext = createContext()


export const ResearchProvider = ({ children }) => {
    const [search, setSearch] = useState('joilson_junior');

    return (
        <ChallengesContext.Provider value={search}>
            {children}
        </ChallengesContext.Provider>
    )

}