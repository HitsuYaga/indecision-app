let visibility = false

const onShowDetail = () => {
  visibility = !visibility;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetail}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>This is some detail that I will show you!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();