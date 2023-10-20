import React from 'react';
import { useQuery } from '@apollo/client';
import ProfileList from '../../components/ProfileList';
import { QUERY_PROFILES } from '../../utils/queries';
import Cover from "../../assets/images/Cover.png"; // Import your background cover image

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main style={{ 
      backgroundImage: `url(${Cover})`, // Set background image
      backgroundSize: 'cover', // Make sure it covers the entire container
      backgroundPosition: 'center center', // Center the background image
      opacity: '0.8', // Set opacity (adjust as needed)
    }}>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
