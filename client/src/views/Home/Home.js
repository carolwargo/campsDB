import React from 'react';
import AuthButtons from '../../components/AuthButtons/index';
import Testimonials from '../../components/Testimonials/Testimonials';
import BWCover from '../../assets/images/BWCover.png'; 
import Container from 'react-bootstrap/esm/Container';



  const homeStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BWCover}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    height: '500px', // Adjust the height to your preference
    display: 'flex',
    alignItems: 'center',
  };
  
  export default function Home() {
  
  return (
    <main className='bg-black text-white ' > 
      <div className="mb-4 py-3 display-flex align-center"
            style={homeStyle}>
              </div>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
<div className="container">
      <Container>
        <Testimonials />
        </Container>
        <AuthButtons />
    </div>
      </div>
    </main>
  );
};



