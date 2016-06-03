var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = ReactNative;

var Weather = React.createClass({
  render: function() {
    return <MapView style={styles.map}></MapView>
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);