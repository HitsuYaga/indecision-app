let count = 0

const addOne = () => {
  count++;
  renderTemplate();
}

const minusOne = () => {
  count--;
  renderTemplate();
}

const reset = () => {
  count = 0;
  renderTemplate();
}

const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>+-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderTemplate();