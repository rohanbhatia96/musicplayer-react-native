import React from 'react';
import {Text, Button} from 'react-native';

const App = () => {
  return (
    <>
      <Text>Music Player</Text>
      <Button
        title="Play/Pause"
        onPress={() => {
          console.log('pressed');
        }}
      />
    </>
  );
};

export default App;
