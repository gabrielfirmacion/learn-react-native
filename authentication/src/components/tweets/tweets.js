var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  StyleSheet,
  Text
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text> Welcome Back! </Text>
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
