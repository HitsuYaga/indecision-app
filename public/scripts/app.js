'use strict';

var visibility = false;

var onShowDetail = function onShowDetail() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onShowDetail },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'This is some detail that I will show you!'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
