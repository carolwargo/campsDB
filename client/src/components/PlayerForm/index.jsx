import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PLAYER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const PlayerForm = ({ profileId }) => {
  const [player, setPlayer] = useState('');

  const [addPlayer, { error }] = useMutation(ADD_PLAYER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const data = await addPlayer({
        variables: { profileId, player },
      });

      setPlayer('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add Players Below...</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Player players..."
              value={player}
              className="form-input w-100"
              onChange={(event) => setPlayer(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
                Add Player
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add players. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PlayerForm;
