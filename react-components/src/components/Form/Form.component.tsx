import React from 'react';
import './Form.component.css';

import { genders } from '../../mock/genders';

interface Props {
  onFormSubmit: (data: formData) => void;
}

export interface formData {
  name?: string;
  agree?: string;
  birthday?: string;
  avatar?: string;
  spam?: string;
  gender?: string;
}
interface FormControls {
  [key: string]: React.RefObject<HTMLInputElement>;
}

export class Form extends React.Component<Props> {
  formControls: FormControls = {
    name: React.createRef(),
    agree: React.createRef(),
    birthday: React.createRef(),
    avatar: React.createRef(),
    spamYes: React.createRef(),
    spamNo: React.createRef(),
  };
  gender: React.RefObject<HTMLSelectElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent) {
    const FileList = this.formControls.avatar.current?.files;
    const images = [];
    if (FileList) {
      images.push(URL.createObjectURL(FileList[0]));
    }

    const formData = {
      name: this.formControls.name.current?.value,
      agree: this.formControls.agree.current?.value,
      birthday: this.formControls.birthday.current?.value,
      avatar: images[0],
      spam: this.formControls.spamYes.current?.value
        ? this.formControls.spamYes.current?.value
        : this.formControls.spamNo.current?.value,
      gender: this.formControls.gender?.current?.value,
    };

    this.props.onFormSubmit(formData);
    event.preventDefault();
    (event.target as HTMLFormElement).reset();
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
          <input type="text" ref={this.formControls.name} />
        </label>
        <label>
          Date of birth:
          <input type="date" ref={this.formControls.birthday} required />
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
              <input
                type="radio"
                name="spam"
                value="yes"
                ref={this.formControls.spamYes}
                defaultChecked
              />
            </label>
          </div>
          <div>
            <label>
              No way!
              <input type="radio" name="spam" ref={this.formControls.spamNo} value="no" />
            </label>
          </div>
        </fieldset>
        <label>
          Upload your avatar
          <input type="file" ref={this.formControls.avatar} />
        </label>
        <label>
          I never read tearms and conditions
          <input type="checkbox" ref={this.formControls.agree} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
