import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default App;
