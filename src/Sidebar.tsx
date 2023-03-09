import { useEffect, useState } from 'react';
import { Character } from './Character';
import CharacterCard from './CharacterCard';

type SidebarProps = {
  handleCharacterClick: (id: number) => void;
  url: string;
};

export default function Sidebar({ handleCharacterClick, url }: SidebarProps) {
  const [characters, setCharacters] = useState<ReadonlyArray<Character>>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [url]);

  return (
    <div className="flex flex-col bg-white w-1/4 rounded-xl p-4 divide-y divide-solid shrink-0">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          handleCharacterClick={handleCharacterClick}
        />
      ))}
    </div>
  );
}
