import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Click" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default SettingScreen;
