var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateDisplay = function DateDisplay(props) {
  return React.createElement(
    'h2',
    null,
    'The time now is ',
    props.date.toLocaleTimeString(),
    '.'
  );
};
DateDisplay.defaultProps = {
  date: new Date()
};

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    var date = new Date();
    date.setSeconds(date.getSeconds() + props.secondsShift);

    _this.state = { date: date };
    return _this;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        return _this2.updateTime();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'updateTime',
    value: function updateTime() {
      var date = new Date();
      date.setSeconds(date.getSeconds() + this.props.secondsShift);

      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(DateDisplay, { date: this.state.date })
      );
    }
  }]);

  return Clock;
}(React.Component);
// Clock.defaultProps = {
//   secondsShift: 0
// }

Clock.defaultProps = {
  secondsShift: 0
};
var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Clock, null),
    React.createElement(Clock, { secondsShift: 10 }),
    React.createElement(Clock, { secondsShift: 20 })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));