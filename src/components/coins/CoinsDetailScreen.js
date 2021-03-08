import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CoinsScreen extends Component {
  componentDidMount() {
    console.log('Coin', this.props.route.params);
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>Coins Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
});
export default CoinsScreen;
