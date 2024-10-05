import React, { useState } from 'react';
import ExoplanetCard from './ExoplanetCard';
import './ExoplanetExplorer.css';

const exoplanets = [
  {
    name: 'HD 189733b',
    description: 'HD 189733b is a blue-colored exoplanet known for its extreme weather conditions, including winds exceeding 8,700 km/h (5,400 mph).',
    airPercentage: 'Approximately 36%',
    waterPresence: 'Observations suggest the presence of water vapor in its atmosphere.',
    distance: 'Approximately 64 light-years away from Earth.',
    orbitalPeriod: '2.2 days.',
    mass: 'Estimated to be about 1.15 times that of Jupiter.',
    surfaceTemperature: 'Estimated to be around 1,000°C (1,832°F).',
    atmosphericComposition: 'The atmosphere is likely rich in methane and clouds of silicate.',
    potentialForLife: 'Due to its high temperatures and extreme atmospheric conditions, it is unlikely to support life.',
    discoveryMethod: 'Detected using the transit method by the Hubble Space Telescope.',
    notableFeatures: 'Notable for its blue color and violent storms, which make it one of the most studied exoplanets.',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/image.png?raw=true',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/hd-189733-b',
  },
  {
    name: 'WASP-12b',
    description: 'WASP-12b is a gas giant known for its extreme proximity to its host star, leading to extreme temperatures.',
    airPercentage: 'Approximately 30%',
    waterPresence: 'Some evidence of water vapor, but conditions are hostile for liquid water.',
    distance: 'Approximately 870 light-years away from Earth.',
    orbitalPeriod: '1.1 days.',
    mass: 'Estimated to be about 1.83 times that of Jupiter.',
    surfaceTemperature: 'Estimated to be around 2,200°C (3,992°F).',
    atmosphericComposition: 'Predominantly hydrogen, with traces of helium and other elements.',
    potentialForLife: 'Extremely unlikely due to its high temperatures and gaseous nature.',
    discoveryMethod: 'Detected using the transit method by NASA\'s Kepler Space Telescope.',
    notableFeatures: 'One of the hottest exoplanets known, with a bloated shape due to tidal forces from its star.',
    image: 'https://raw.githubusercontent.com/AkhildevCV/nasa/main/WASP.png',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/wasp-12-b',
  },
  {
    name: '55 Cancri e',
    description: '55 Cancri e is a super-Earth known for its high density and potential for carbon-rich conditions.',
    airPercentage: 'Approximately 25%',
    waterPresence: 'There are indications of water, but mostly in the form of vapor or possibly in a molten state.',
    distance: 'Approximately 40 light-years away from Earth.',
    orbitalPeriod: '0.74 days.',
    mass: 'Estimated to be about 8 times that of Earth.',
    surfaceTemperature: 'Estimated to be around 1,400°C (2,552°F).',
    atmosphericComposition: 'Likely contains significant amounts of carbon, with possibilities of diamond formation.',
    potentialForLife: 'The extreme conditions make it unlikely to support life as we know it.',
    discoveryMethod: 'Detected using the radial velocity method by multiple observatories.',
    notableFeatures: 'It is hypothesized that the planet could have a thick atmosphere rich in carbon.',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/cancri%20e.png?raw=true',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/55-cancri-e',
  },
  {
    name: 'K2-18b',
    description: 'K2-18b is a potentially habitable exoplanet located within its star\'s habitable zone.',
    airPercentage: 'Approximately 19%',
    waterPresence: 'Evidence suggests the presence of water vapor in its atmosphere.',
    distance: 'Approximately 124 light-years away from Earth.',
    orbitalPeriod: '33 days.',
    mass: 'Estimated to be about 8.6 times that of Earth.',
    surfaceTemperature: 'Estimated to be around 12°C (54°F).',
    atmosphericComposition: 'Likely contains hydrogen and helium, with potential for water vapor.',
    potentialForLife: 'Conditions may support life, especially if water is present in liquid form.',
    discoveryMethod: 'Detected using the transit method by the K2 mission of NASA.',
    notableFeatures: 'First exoplanet found to have water in its atmosphere that lies in the habitable zone of its star.',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/k2-18b.png?raw=true',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/k2-18-b',
  },
  {
    name: 'TRAPPIST-1e',
    description: 'TRAPPIST-1e is one of the seven Earth-sized planets orbiting the ultracool dwarf star TRAPPIST-1, located in the habitable zone.',
    airPercentage: 'Approximately 18%',
    waterPresence: 'Likely has the potential for liquid water on its surface.',
    distance: 'Approximately 40 light-years away from Earth.',
    orbitalPeriod: '6.1 days.',
    mass: 'Estimated to be about 0.92 times that of Earth.',
    surfaceTemperature: 'Estimated to be around 0°C (32°F).',
    atmosphericComposition: 'Potentially has a thick atmosphere rich in nitrogen and possibly water vapor.',
    potentialForLife: 'The conditions are promising for the existence of life due to the potential for liquid water.',
    discoveryMethod: 'Detected using the transit method by NASA\'s Spitzer Space Telescope.',
    notableFeatures: 'Its location in the habitable zone makes it one of the most interesting targets in the search for extraterrestrial life.',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/trsppidy.jpg?raw=true',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/trappist-1-e',
  },
];

const ExoplanetExplorer = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [likedPlanets, setLikedPlanets] = useState([]);

  const filteredPlanets = exoplanets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchVisible(!searchVisible);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPlanetIndex(0);
  };

  const handleNextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % filteredPlanets.length);
  };

  const handlePreviousPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + filteredPlanets.length) % filteredPlanets.length);
  };

  const handleLike = (planetName) => {
    setLikedPlanets(prevLiked => 
      prevLiked.includes(planetName)
        ? prevLiked.filter(name => name !== planetName)
        : [...prevLiked, planetName]
    );
  };

  return (
    <div className="exoplanet-explorer">
      {searchVisible && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search planets..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      )}
      {filteredPlanets.length > 0 ? (
        <ExoplanetCard 
          planet={filteredPlanets[currentPlanetIndex]} 
          onSearch={handleSearch}
          onLike={handleLike}
          isLiked={likedPlanets.includes(filteredPlanets[currentPlanetIndex].name)}
        />
      ) : (
        <p className="no-results">No planets found</p>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePreviousPlanet} className="nav-button">Previous</button>
        <button onClick={handleNextPlanet} className="nav-button">Next</button>
      </div>
    </div>
  );
};

export default ExoplanetExplorer;
