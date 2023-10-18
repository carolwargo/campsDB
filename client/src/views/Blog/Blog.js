import React from 'react';
import './blog.css'; // Make sure to create App.css file for your custom styles

import Harper from "../../assets/images/Harper.jpg";
import Max from "../../assets/images/Max.jpg";

function Blog() {
  return (
    <div className="w3-content" style={{ maxWidth: '1400px' }}>
      {/* Header */}
      <header className="w3-container w3-center w3-padding-32">
        <h1><b>MY BLOG</b></h1>
        <p>Welcome to the <span className="w3-tag"> 301_Catching</span> Blog Spot</p>
      </header>

      <div className="w3-row">
        {/* Blog entries */}
        <div className="w3-col l8 s12">
          {/* Blog entry 1 */}
          <div className="w3-card-4 w3-margin w3-white">
          <img src={Max} alt="Max" style={{ width: '100%' }} />
            <div className="w3-container">
              <h3><b>TITLE HEADING</b></h3>
              <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
            </div>

            <div className="w3-container">
              <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Blog entry 2 */}
          <div className="w3-card-4 w3-margin w3-white">
          <img src={Harper} alt="Harper" style={{ width: '100%' }} />
            <div className="w3-container">
              <h3><b>BLOG ENTRY</b></h3>
              <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
            </div>

            <div className="w3-container">
              <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-badge">2</span></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction menu */}
        <div className="w3-col l4">
          {/* About Card */}
        <div className="w3-card w3-margin w3-margin-top">
            <img src="/w3images/avatar_g.jpg" alt="" style={{ width: '100%' }} />
            <div className="w3-container w3-white">
                <h4><b>My Name</b></h4>
                <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
        </div>
          <hr />

          {/* Posts */}
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Popular Posts</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                    <img src="/w3images/workshop.jpg" alt="Workshop" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Lorem</span><br />
                    <span>Sed mattis nunc</span>
                </li>
                {/* Add more list items as needed */}
            </ul>
        </div>
          <hr />

          {/* Labels / tags */}
          <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
              <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
              <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> {/* Add more tags as needed */}</p>
            </div>
          </div>
        </div>
      </div>

    <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button>
        <button className="w3-button w3-black w3-padding-large w3-margin-bottom">Next »</button>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
    </footer>
    </div>
  );
}

export default Blog;
