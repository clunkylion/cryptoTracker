import React, {Component} from "react";
import {TextInput, Platform, View, StyleSheet} from "react-native";
import colors from "../../resources/colors";
class CoinsSearch extends Component {
  state = {
    query: "",
  };
  handleText = (query) => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };
  render() {
    const {query} = this.state;
    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS === "ios"
              ? styles.textInputIos
              : styles.textInputAndroid,
          ]}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.charade,
    paddingLeft: 16,
    color: "#fff",
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
export default CoinsSearch;
