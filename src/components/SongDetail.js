import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div> Select a Song</div>
    );
  }
  return (
    <div>
      {song.title} <br />
      {song.duration}
    </div>
  );
};

const mapToState = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapToState)(SongDetail);