import React, {Component} from "react";
import {View, FlatList, StyleSheet, Text} from "react-native";
import Storage from "../../libs/storage";
import FavoritesEmptyState from "./FavoritesEmptyState";
import Colors from "../../resources/colors";
import CoinsItem from "../coins/CoinsItem.js";

class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };
  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes("favorite-"));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map((fav) => JSON.parse(fav[1]));
      this.setState({favorites});
    } catch (error) {
      console.error("get favorites err", error);
    }
  };
  handlePress = (coin) => {
    this.props.navigation.navigate("CoinDetails", {coin});
  };
  componentDidMount() {
    this.getFavorites();
    this.props.navigation.addListener("focus", this.getFavorites);
  }
  componentWillUnmount() {
    this.props.navigation.removeListener("focus", this.getFavorites);
  }
  render() {
    const {favorites} = this.state;
    return (
      <View style={styles.container}>
        {favorites.length === 0 ? (
          <FavoritesEmptyState />
        ) : (
          <FlatList
            data={favorites}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={() => this.handlePress(item)} />
            )}></FlatList>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
