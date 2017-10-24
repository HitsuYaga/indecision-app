'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleVisibility = function (_React$Component) {
  _inherits(ToggleVisibility, _React$Component);

  function ToggleVisibility(props) {
    _classCallCheck(this, ToggleVisibility);

    var _this = _possibleConstructorReturn(this, (ToggleVisibility.__proto__ || Object.getPrototypeOf(ToggleVisibility)).call(this, props));

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);

    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(ToggleVisibility, [{
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Toggle Visibility';
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? 'Hide details' : 'Show details'
        ),
        this.state.visibility && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'This is some detail that I will show you'
          )
        )
      );
    }
  }]);

  return ToggleVisibility;
}(React.Component);

ReactDOM.render(React.createElement(ToggleVisibility, null), document.getElementById('app'));

// let visibility = false

// const onShowDetail = () => {
//   visibility = !visibility;
//   render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetail}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>This is some detail that I will show you!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// render();
