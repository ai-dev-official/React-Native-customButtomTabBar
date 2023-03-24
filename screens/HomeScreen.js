import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title="Click"
      onPress={() => Alert('Button Clicked!')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    }
});

export default HomeScreen;;