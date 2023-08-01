import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;