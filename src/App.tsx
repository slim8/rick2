// Documentation Tailwind : https://tailwindcss.com/
// Documentation Heroicons : https://github.com/tailwindlabs/heroicons#react
// Documentation API : https://rickandmortyapi.com/

import { useCallback, useEffect, useState } from 'react';
import { Character } from './Character';
import CharacterInfo from './CharacterInfo';
import Sidebar from './Sidebar';
import Search from './Search';

// Afficher un listing des personnages Rick et Morty, implémenter
// une recherche de personne.Enfin, rendre possible le clique sur
// un personnage afin, d'avoir + d'informations grâce à une requête.
// Il faut aussi que tout soit typer correctement, et créer des types
// selon le schéma donné par la documentation Rick et Morty.
export default function App() {
  const [currentCharacterId, setCurrentCharacterId] = useState<
    number | undefined
  >(undefined);
  const [currentCharacter, setCurrentCharacter] = useState<
    Character | undefined
  >(undefined);

  const handleCharacterClick = useCallback((id: number) => {
    setCurrentCharacterId(id);
  }, []);

  const [url, setUrl] = useState<string>(
    'https://rickandmortyapi.com/api/character'
  );

  const handleSearch = useCallback((value: string) => {
    setUrl(
      `https://rickandmortyapi.com/api/character/?name=${value}&status=alive`
    );
  }, []);

  useEffect(() => {
    if (!currentCharacterId) {
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${currentCharacterId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCharacter(data);
      });
  }, [currentCharacterId]);

  return (
    <div>
      <header>
        <Search handleSearch={handleSearch} />
      </header>
      <main className="flex gap-8 m-8">
        <Sidebar handleCharacterClick={handleCharacterClick} url={url} />
        {currentCharacter && <CharacterInfo {...currentCharacter} />}
      </main>
    </div>
  );
}
