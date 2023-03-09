type SearchProps = {
  handleSearch: (value: string) => void;
};

export default function Search({ handleSearch }: SearchProps) {
  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}
