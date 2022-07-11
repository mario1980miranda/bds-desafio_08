import { GithubUserData } from 'types/githubUserData';
import './styles.css';

type Props = {
  userData: GithubUserData;
};

const ResultCard = ({ userData }: Props) => {
  return (
    <div className="result-container">
      <img src={userData.avatar_url} alt={userData.name} />
      <div className="result-card">
        <h2>Informações</h2>
        <div className="result-description">
          <h6>Perfil: </h6>
          <p>{userData.html_url}</p>
        </div>
        <div className="result-description">
          <h6>Seguidores: </h6>
          <p>{userData.followers}</p>
        </div>
        <div className="result-description">
          <h6>Localidade: </h6>
          <p>{userData.location}</p>
        </div>
        <div className="result-description">
          <h6>Nome: </h6>
          <p>{userData.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
