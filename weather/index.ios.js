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
    var pins = [{
      latitude: 37,
      longitude: -95
    }];

    return <MapView annotations={pins}
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}></MapView>
  },
  onRegionChangeComplete: function(region) {

  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);