import './ProfileSelect.css';
import user from '../assets/userBackground.png'; 
import { useNavigate } from 'react-router-dom';

const profiles = [
  {name: 'Recruiter'},
  {name: 'Developer'},
  {name: 'Friend'},
];

const ProfileSelect = ({ onSelect }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/profile/${name.toLowerCase()}`);
  };

  return (
    <div className="profile-screen">
      <h1>Who's Watching?</h1>
      <div className="profiles">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="profile"
            onClick={() => handleClick(profile.name)}
          >
            <img src={user} title='Icon made by Freepik from www.flaticon.com' alt={profile.name} className="profileImg"></img>
            <div className='userName'>{profile.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelect;