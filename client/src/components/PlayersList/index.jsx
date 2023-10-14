import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_PLAYER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const PlayersList = ({ players, isLoggedInUser = false }) => {
    const [removePlayer, { error }] = useMutation(REMOVE_PLAYER, {
      update(cache, { data: { removePlayer} }) {
        try {
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: removePlayer},
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  
    const handleRemovePlayer = async (player) => {
      try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await removePlayer({
          variables: { player },
        });
      } catch (err) {
        console.error(err);
      }
    };
  
    if (!players.length) {
      return <h3>No Players Yet</h3>;
    }
  
    return (
      <div>
        <div className="flex-row justify-space-between my-4">
          {players &&
            players.map((player) => (
              <div key={player} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                    <span>{player}</span>
                    {isLoggedInUser && (
                      <button
                        className="btn btn-sm btn-danger ml-auto"
                        onClick={() => handleRemovePlayer(player)}
                      >
                        X
                      </button>
                    )}
                  </h4>
                </div>
              </div>
            ))}
        </div>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    );
  };
  
  export default PlayersList;
  