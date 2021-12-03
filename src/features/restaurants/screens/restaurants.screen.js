import React from "react";

import { View, SafeAreaView, Text, StyleSheet } from "react-native";

import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
  },
  search: {
    padding: 15,
  },
  list: {
    backgroundColor: 'royalblue',
    flex: 1,
    padding: 15,
  },
});
