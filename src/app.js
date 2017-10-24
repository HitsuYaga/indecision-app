class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in a hands of computer</h2>      
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <Option />
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
        </ol>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="option" />
        <button>Add Option</button>
      </div>
    )
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot)