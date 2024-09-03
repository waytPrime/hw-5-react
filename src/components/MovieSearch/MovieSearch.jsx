import { useSearchParams } from "react-router-dom";

export default function MovieSearch() {
  const [query, setSearchQuery] = useSearchParams();
  const searchQuery = query.get("searchParam");

  const nextQuery = (e) => {
    const nextParams =
      e.target.value !== "" ? { searchParam: `${e.target.value}` } : {};
    setSearchQuery(nextParams);
  };
  return (
    <>
      <input value={searchQuery} onChange={nextQuery} />
      <button type="button">search</button>
    </>
  );
}
