import React from 'react';

const PlayersList = ({players }) => {
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
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {player} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayersList;
