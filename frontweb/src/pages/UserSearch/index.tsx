import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import UserDetailsLoader from 'components/ResultCard/UserDetailsLoader';

type FormData = {
  username: string;
};

type GithubUserData = {
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  followers: number;
};

const UserSearch = () => {
  const [formData, setFormData] = useState<FormData>({ username: '' });
  const [githubUserData, setGithubUserData] = useState<GithubUserData>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setGithubUserData(response.data);
        console.log(githubUserData);
      })
      .catch((error) => {
        setGithubUserData(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="username"
              value={formData.username}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {isLoading ? (
        <div className="container">
          <UserDetailsLoader />
        </div>
      ) : (
        githubUserData && (
          <div className="container">
            <ResultCard userData={githubUserData} />
          </div>
        )
      )}
    </div>
  );
};

export default UserSearch;
