export default function MovieSearch({ query, setQuery, onFetch }) {
  const searchQuery = query.get("searchParam");

  const nextQuery = (e) => {
    const nextParams =
      e.target.value !== "" ? { searchParam: `${e.target.value}` } : {};
    setQuery(nextParams);
  };

  const onFetchMovie = () => {
    onFetch();
  };

  return (
    <>
      <input value={searchQuery || ""} onChange={nextQuery} />
      <button type="button" onClick={onFetchMovie}>
        search
      </button>
    </>
  );
}
