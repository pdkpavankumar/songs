import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'no scrubs', duration: '2.30'
    },
    {
      title: 'song 32', duration: '3.10'
    },
    {
      title: 'All Star', duration: '1.45'
    },
    {
      title: 'Last Song', duration: '4.50'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});