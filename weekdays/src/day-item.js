// Import some code we need
var React = require('react');
var ReactNative = require('react-native');
var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;

// create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      A day of the week
    </Text>
  }
});

// style our component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// make this code available elsewhere
module.exports = DayItem;