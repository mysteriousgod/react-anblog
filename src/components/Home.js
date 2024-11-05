// Import necessary dependencies
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    // Main container for the page content
    <main className="container mx-auto px-4 py-12 md:px-6 lg:px-16">
      {/* Hero Section */}
      <section className="hero relative bg-cover bg-center mb-12 md:mb-20">
        <header id="header" className="sticky top-0 w-full flex justify-between items-center bg-white py-4 px-4">
          <a id="logo" href="#" className="font-bold text-2xl text-gray-600 transition duration-300 ease-in-out hover:text-blue-500">
            ST
          </a>
          <nav>
            <ul className="flex justify-between items-center gap-4">
              <li><a href="#" className="text-lg text-gray-700 transition duration-300 ease-in-out hover:text-blue-500">HOME</a></li>
              <li><a href="#" className="text-lg text-gray-700 transition duration-300 ease-in-out hover:text-blue-500">VISIT</a></li>
              <li><a href="#" className="text-lg text-gray-700 transition duration-300 ease-in-out hover:text-blue-500">ABOUT</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Header */}
        <header className="hero-header flex justify-center items-center text-black py-12">
          <h1 className="hero-title font-bold text-3xl mb-4 text-blue-500 transition duration-300 ease-in-out hover:text-green-600">The Absolute Failure</h1>
        </header>

        {/* Footer for the hero section */}
        <footer className="hero-footer relative z-0 w-full h-40"></footer>
      </section>

      {/* Article Section */}
      <article className="text-gray-600 leading-relaxed mb-20">
        <h2>Some additional content</h2>
        <p>The rest of the page content continues below the hero. You can use the hero at the top of your page, e.g., the home page. A hero is great to display a high-quality picture together with a catchy title.</p>
        <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
        <p>Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus.</p>
      </article>

      {/* Blog Section */}
      <section className="blog mb-20">
        <h1 className="heading font-bold text-3xl mb-4 text-gray-600">Our Blog</h1>
        <div className="box-container flex justify-around gap-4">
          {[
            {
              image: './img/niks01.png',
              title: 'Do You Want Your Blog To Stand Alone Or Support Another Site?',
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!'
            },
            {
              image: './img/niks02.png',
              title: 'Do You Want Your Blog To Stand Alone Or Support Another Site?',
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!'
            },
            {
              image: './img/niks01.png',
              title: 'Do You Want Your Blog To Stand Alone Or Support Another Site?',
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!'
            },
            {
              image: './img/niks03.png',
              title: 'Do You Want Your Blog To Stand Alone Or Support Another Site?',
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!'
            },
            {
              image: './img/niks05.png',
              title: 'Do You Want Your Blog To Stand Alone Or Support Another Site?',
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!'
            }
          ].map((post, index) => (
            <div key={index} className="box shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto py-4">
              <div className="image relative h-48 md:h-64 bg-cover bg-center">
                <img src={post.image} alt="" />
              </div>
              <div className="content p-4 text-gray-600 leading-relaxed">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <a href="#" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container text-center mb-4">
          <p className="text-muted mb-0 py-2"><h6>2023 All rights reserved.</h6></p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
