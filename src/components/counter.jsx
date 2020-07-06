import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ['tags1', 'tags2', 'tags3'],
    // address: {
    //   street: 'nepal',
    // },
  };

  styles = {
    fontSize: 15,
    fontWeight: 'bold',
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'zero' : value;
  }

  getBadgClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>there are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //********* constructor ********* */
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="container">
        <span style={this.styles} className={this.getBadgClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Incremnet
        </button>
        <button
          onClick={() => this.props.Ondelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
}
export default Counter;
