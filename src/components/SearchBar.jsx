const SeachBar = ({ setSearchBar }) => {
  return (
    <>
      <input
        type="text"
        className="searchBar"
        placeholder="Chercher un produit (en anglais)"
        onChange={(e) => {
          setSearchBar(e.target.value);
        }}
      />
    </>
  );
};
export default SeachBar;
