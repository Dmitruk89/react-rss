import React from 'react';

interface Props {
  children?: React.ReactNode;
}

interface FormState {
  isGoing: boolean;
  numberOfGuests: number;
}

export class Form extends React.Component<Props, FormState> {
  input: React.RefObject<HTMLInputElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.checkbox = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent) {
    console.log(
      'A name was submitted: ' + this.input.current?.value,
      'agreed:',
      this.checkbox.current?.value
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <label>
          I consent to my personal data
          <input type="checkbox" ref={this.checkbox} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
