import React from 'react';
import './Form.component.css';

import { genders } from '../../mock/genders';

interface Props {
  children?: React.ReactNode;
}

export class Form extends React.Component<Props> {
  name: React.RefObject<HTMLInputElement>;
  agree: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  avatar: React.RefObject<HTMLInputElement>;
  spam: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLSelectElement>;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.agree = React.createRef();
    this.birthday = React.createRef();
    this.avatar = React.createRef();
    this.spam = React.createRef();
    this.gender = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent) {
    const formData = {
      name: this.name.current?.value,
      agree: this.agree.current?.value,
      birthday: this.birthday.current?.value,
      avatar: this.avatar.current?.value,
      spam: this.spam.current?.value,
      gender: this.gender?.current?.value,
    };
    console.log(formData);
    event.preventDefault();
  }

  render() {
    const genderOptions = genders.map((gen, i) => {
      return (
        <option key={i} value={gen}>
          {gen}
        </option>
      );
    });
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" ref={this.name} />
        </label>
        <label>
          Date of birth:
          <input type="date" ref={this.birthday} />
        </label>
        <label>
          Choose your gender:
          <select ref={this.gender}>
            <option value="">--Please choose an option--</option>
            {genderOptions}
          </select>
        </label>
        <fieldset>
          <legend>Want to subscribe to our spam?</legend>
          <div>
            <label>
              Sure
              <input type="radio" name="spam" value="yes" defaultChecked />
            </label>
          </div>

          <div>
            <label>
              No way!
              <input type="radio" name="spam" value="no" />
            </label>
          </div>
        </fieldset>
        <label>
          Upload your avatar
          <input type="file" ref={this.avatar} />
        </label>
        <label>
          I never read tearms and conditions
          <input type="checkbox" ref={this.agree} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
