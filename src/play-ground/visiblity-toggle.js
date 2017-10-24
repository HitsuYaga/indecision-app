class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    const title = 'Toggle Visibility'
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>This is some detail that I will show you</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'))

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