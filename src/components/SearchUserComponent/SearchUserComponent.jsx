import React, { useState } from "react";

const SearchComponent = ({ userList }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    const result = userList.find(
      (users) =>
        users.nickname.toLowerCase() === search.toLowerCase()
    );
    setSearchResult(result);
  };

  return (
    <div>
      <input className="userInput"
        type="text"
        placeholder="Digite o nome do usuário"
        value={search}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Pesquisar</button>

      {searchResult ? (
        <div className="result">
          <h2>Dados do usuário encontrado:</h2>
          <p>Nome: {searchResult.nickname}</p>
          <p>Idade: {searchResult.idade}</p>
          <p>Email: {searchResult.email}</p>
        </div>
      ) : (
        search.length > 0 && <p className="result">Cadastro não encontrado</p>
      )}
    </div>
  );
};

export default SearchComponent;
