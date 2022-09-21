import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionCard />
      </div>
    );
  }
}

export default Missions;
