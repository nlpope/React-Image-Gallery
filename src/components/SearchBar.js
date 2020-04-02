import React from "react";

//class components use render()
class SearchBar extends React.Component {
  state = { term: "" };
  //anytime you use a callback function in a component, use arrow notation to avoid problems w/'this' keyword
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    //multiline JSX needs to be wrapped in ()
    return (
      <div className="ui segment">
        {/**no parentheses on event handlers (.onFormSubmit) as it's a reference */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/**uncontrolled form element */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * NOTES:
 The below is an uncontrolled form inputs
 <input type="text" onChange={this.onInputChange} />
 
 what React devs want is a controlled form element(below)
 <input
    type="text"
    value={this.state.term}
    onChange={e => this.setState({ term: e.target.value })}
/>
 *
 *difference? you cant change the value via the DOM (unlike defaultValue)...
 *MAINLY LETS REACT KNOW THE STATE OF THE FORM IS CHANGING/UPDATING
 *as much as you can you should avoid direct DOM observation/manipulation
 *  /

/**
 * benefits of controlled inputs:
 * -instant field validation
 * -disable buttons unless all fields are valid
 * -enforce some formats
 * -dynamic inputs
 * 
 *
 * but if we're using input type called 'file' is under browser's control
 * -you should leave these as uncontrolled inputs
 */
