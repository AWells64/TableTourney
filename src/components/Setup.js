import React from 'react';
import AddPlayer from '../containers/AddPlayer';
import PlayerList from '../containers/PlayerList';

const Setup = () => (
    <div>
        <AddPlayer />
        <PlayerList />
        <button type="button">Generate your bracket!</button>
    </div>
);

export default Setup;