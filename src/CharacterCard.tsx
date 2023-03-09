import { Character } from './Character';

type CharacterCardProps = Pick<
  Character,
  'id' | 'name' | 'species' | 'image'
> & {
  handleCharacterClick: (id: number) => void;
};

export default function CharacterCard({
  id,
  name,
  species,
  image,
  handleCharacterClick,
}: CharacterCardProps) {
  return (
    <button
      className="flex items-center gap-4 py-4 px-1 hover:bg-gray-100 text-left"
      onClick={() => handleCharacterClick(id)}
    >
      <img src={image} className="w-16 h-16 rounded-full object-cover" />
      <div className="flex flex-col justify-between">
        <strong>{name}</strong>
        <span className="text-xs text-gray-500">{species}</span>
      </div>
    </button>
  );
}
