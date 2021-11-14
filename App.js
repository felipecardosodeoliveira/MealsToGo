import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Platform
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>
          Search
        </Text>
      </View>
      <View style={styles.list}>
        <Text>
          List
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingLeft: 10
  },
  list: {
    backgroundColor: 'blue',
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 10
  }
})