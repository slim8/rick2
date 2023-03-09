import { Character } from './Character';

export default function CharacterInfo(props: Character) {
  return (
    <div className="grid grid-cols-6 gap-4 bg-white grow rounded-xl shadow-2xl p-4">
      {Object.entries(props).map(([key, value]) =>
        typeof value === 'string' ? (
          <Card key={key} index={key} value={value} />
        ) : (
          ''
        )
      )}
    </div>
  );
}

function Card({ index, value }: { index: string; value: string }) {
  return (
    <div className=" flex flex-col rounded-xl border shadow-md p-4 ">
      <span className="text-sm text-gray-400">{index}</span>
      <span className="break-all">{value}</span>
    </div>
  );
}
