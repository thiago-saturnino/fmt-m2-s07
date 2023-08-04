import '../HeaderComponent/HeaderComponent.css';
import UserCardComponent from '../UserCardComponent/UserCardComponent';
import React, { useState } from "react";
import avatar from '../../assets/images/avatar.jpg'
import SearchComponent from '../SearchUserComponent/SearchUserComponent';

const HeaderComponent = () => {
  const [user, setUser] = useState("");
  const [userList, setUserList] = useState([]);

  const handleClick = () => {
    const inputName = prompt("Digite seu nome");
    if (inputName) {
      setUser(inputName);
    }
  };

  const FormComponent = () => {
    const [formData, setFormData] = useState({
      nickname: "",
      idade: "",
      email: "",
      senha: "",
    });

    const handleInput = (event) => {
      const { id, value } = event.target;

      const data = { ...formData, [id]: value };
      setFormData(data);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);

      if (isFormValid()) {
        const newUser = {
          ...formData,
          avatar: {avatar},
        };

        setUserList((prevUserList) => [...prevUserList, newUser]);
        setFormData({
          nickname: "",
          idade: "",
          email: "",
          senha: "",
        });
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert("Verifique os campos do formulário");
      }
    };

    const isFormValid = () => {
      for (const key in formData) {
        if (!formData[key]) {
          return false;
        }
      }
      return true;
    };

    return (
      <form className="form-wrapper col-2" onSubmit={handleSubmit}>
        <label htmlFor="nickname" className='info'>Nickname:</label>
        <input className='info2'
          type="text"
          id="nickname"
          placeholder="Digite seu nickname"
          value={formData.nickname}
          onChange={handleInput}
        />

        <label htmlFor="idade" className='info'>Idade:</label>
        <input className='info2'
          type="number"
          id="idade"
          placeholder="Digite sua idade"
          value={formData.idade}
          onChange={handleInput}
        />

        <label htmlFor="email" className='info'>E-mail:</label>
        <input className='info2'
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={formData.email}
          onChange={handleInput}
        />

        <label htmlFor="senha" className='info'>Senha:</label>
        <input className='info2'
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={formData.senha}
          onChange={handleInput}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  };
  
  return (
    <>
      <h1 onClick={handleClick}>Olá, {user || "Visitante"}</h1>
      <FormComponent />
      <div className="user-list">
        {userList.map((user, index) => (
          <UserCardComponent key={index} user={user} />
        ))}
      </div>
      <SearchComponent userList={userList} />
    </>
  );
};

export default HeaderComponent;
