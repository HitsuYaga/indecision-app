class IndecisionApp extends React.Component {  
  render() {
    const title = 'Indecision App';
    const subTitle = "Put your life in a hands of computer";
    const options = ['Item1', 'Item2', 'Item3']

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>      
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handle Pick")
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }

  handleRemoveAll() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)          
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleOnSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      e.target.elements.option.value = '';
      alert(option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot)