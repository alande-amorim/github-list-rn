import React from 'react';
import { Text, StatusBar } from 'react-native';

import './config/ReactotronConfig';

console.tron.log('hello world');

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>GitHub List</Text>
    </>
  );
}
