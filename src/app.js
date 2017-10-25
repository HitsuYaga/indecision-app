// babel src/app.js --out-file=public/scripts/app.js --presets=react,env --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: props.options
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid option to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists"
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'Indecision App';
    const subTitle = "Put your life in a hands of computer";

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>      
    </div>
  )
}

// Header.defaultProps = {
//   title: 'Indecision App'
// }

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOption}
        onClick={props.handlePick}
      >What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)          
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      error: undefined
    }
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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