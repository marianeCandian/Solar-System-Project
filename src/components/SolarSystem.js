import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-div">
        <Title headline="Planetas" />
        <div className="planet-container">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
