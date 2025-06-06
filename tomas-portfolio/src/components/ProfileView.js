import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfileView.css';

const profileContent = {
  developer: {
    title: 'Developer Portfolio',
    description: 'Code-heavy projects, GitHub links, case studies...',
  },
  friend: {
    title: 'Fun Stuff for Friends',
    description: 'Cool visuals, games, interactive toys...',
  },
  recruiter: {
    title: 'Recruiter View',
    description: 'Resume, accomplishments, clean layout...',
  },
};

const ProfileView = () => {
  const { type } = useParams();
  const profile = profileContent[type];

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div className="profile-view">
      <h1>{profile.title}</h1>
      <p>{profile.description}</p>
      {/* You can show different projects or GIFs based on `type` */}
    </div>
  );
};

export default ProfileView;