var formatTime = require('minutes-seconds-milliseconds');
var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = ReactNative;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a List of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <TouchableHighlight onPress={this.handleStartPress} underlayColor="gray">
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  },
  handleStartPress: function() {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30)
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch',
  },
  header: { //Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5, // takes up 5/8 of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // green
    flex: 3, // takes up 3/8 of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);