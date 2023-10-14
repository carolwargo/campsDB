import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}'s these players have been added...
      </h2>

      {profile.players?.length > 0 && <PlayerList players={profile.players} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <PlayerForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;