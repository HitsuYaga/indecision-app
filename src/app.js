var app = {
  title: 'Indecision',
  subtitle: 'This is some info',
  options: ['One', 'Two']
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 1</li>
    </ol>
  </div>
);

var user = {
  name: 'Hitsu',
  age: 28,
  location: 'Ho Chi Minh city'
}

function getLocation (location) {
  return <p>Location: {location}</p>
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);