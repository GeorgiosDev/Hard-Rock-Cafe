import React from 'react';
import '../styles/about.css';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import about5 from '../assets/images/about5.jpg';
import about6 from '../assets/images/about6.jpg';
import about7 from '../assets/images/about7.jpg';
import about8 from '../assets/images/about8.jpg';
import about9 from '../assets/images/about9.jpg';

const imageArray = [about1, about2, about3, about4, about5, about6, about7, about8,about9];

export default function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <h1>About Us</h1>
        <p>

The Hard Rock Cafe, a legendary symbol of rock 'n' roll and entertainment, has a history as rich and vibrant as the music it celebrates. It all began in 1971 when two music enthusiasts, Isaac Tigrett and Peter Morton, decided to create a space that would not only serve delicious American cuisine but also pay homage to the world of rock music.

The first Hard Rock Cafe opened its doors in London, just off Hyde Park, and it quickly became a beloved hangout for rockstars and music aficionados. The walls of the cafe were adorned with rare and authentic rock 'n' roll memorabilia, a tradition that would become a hallmark of every Hard Rock Cafe around the world.

As the cafe gained popularity, more locations sprung up in major cities across the globe, each one embracing the unique spirit of its host city while remaining true to the brand's commitment to great food and iconic music memorabilia. These locations showcased the rich and diverse history of rock music, with artifacts from legendary artists like Elvis Presley, The Beatles, Jimi Hendrix, and many others.

Hard Rock Cafe became more than just a restaurant; it was a place where fans could connect with the music they loved. It hosted live performances from emerging artists and rock 'n' roll icons alike, creating an unforgettable atmosphere for fans from all walks of life.

Over the years, the brand expanded its offerings to include Hard Rock Hotels, Casinos, and even a line of merchandise. Today, Hard Rock is not just a cafe; it's a global phenomenon, spreading the magic of music and rock culture to every corner of the world.

The Hard Rock Cafe has a deep-rooted history that resonates with the rebellious spirit of rock 'n' roll, uniting generations of music lovers under one roof. It's a place where the love for music, delicious food, and a celebration of individuality come together to create an unforgettable experience. Whether you're a seasoned rock 'n' roll enthusiast or a casual visitor, the Hard Rock Cafe continues to be a place where everyone can feel like a rockstar for a night.

So, as you step into a Hard Rock Cafe, remember that you're not just enjoying a meal; you're immersing yourself in the living history of rock music, an experience that's as timeless as the tunes that inspired it.
        </p>
      </div>
      <div className="aboutBottom">
        {imageArray.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
