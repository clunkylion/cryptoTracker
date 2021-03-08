import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../resources/colors';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
class CoinDetailsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.state.loading = true;
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({coins: res.data, loading: false});
  };

  handlePress = (coin) => {
    console.log('go to details', this.props);
    this.props.navigation.navigate('CoinDetails', {coin});
  };

  render() {
    const {coins} = this.state;
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator styles={styles.loader} color="#fff" size="large" />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  title: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});
export default CoinDetailsScreen;
