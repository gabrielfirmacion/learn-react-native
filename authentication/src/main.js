var React  = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>I am on both iOS and Android!!!</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});