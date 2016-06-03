var React  = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Navigator
} = ReactNative;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

var ROUTES = {
  signin: Signin
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('myAppId','unused');
    Parse.serverURL = 'https://authentication-react-native.herokuapp.com/parse';
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});