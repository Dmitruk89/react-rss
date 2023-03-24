import React from 'react';
import './Form.component.css';

import { genders } from '../../mock/genders';

interface Props {
  onFormSubmit: (data: formData | null) => void;
}

interface State {
  isAgreeValid: boolean;
  isValidationVisible: boolean;
  isNameValid: boolean;
  isAvatarValid: boolean;
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

export class Form extends React.Component<Props, State> {
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
    this.state = {
      isNameValid: false,
      isAvatarValid: false,
      isAgreeValid: false,
      isValidationVisible: false,
    };
  }

  handleNameInput = () => {
    const name = this.formControls.name.current?.value;
    if (name && name?.length >= 4) {
      this.setState({ isNameValid: true });
      return name;
    } else {
      this.setState({ isNameValid: false });
      return;
    }
  };

  handleAvatarInput = () => {
    const fileList = this.formControls.avatar.current?.files;
    const images = [];

    if (fileList && fileList.length !== 0) {
      images.push(URL.createObjectURL(fileList[0]));
      this.setState({ isAvatarValid: true });
      return images[0];
    } else {
      this.setState({ isAvatarValid: false });
      return '';
    }
  };

  handleAgreeInput = () => {
    const isAgree = this.formControls.agree.current?.checked;

    if (isAgree) {
      this.setState({ isAgreeValid: true });
      return 'agreed';
    } else {
      this.setState({ isAgreeValid: false });
      return '';
    }
  };

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formData = {
      name: this.handleNameInput(),
      agree: await this.handleAgreeInput(),
      birthday: this.formControls.birthday.current?.value,
      avatar: this.handleAvatarInput(),
      spam: this.formControls.spamYes.current?.checked
        ? this.formControls.spamYes.current?.value
        : this.formControls.spamNo.current?.value,
      gender: this.formControls.gender?.current?.value,
    };

    if (
      (await this.state.isAgreeValid) &&
      (await this.state.isAvatarValid) &&
      (await this.state.isNameValid)
    ) {
      this.props.onFormSubmit(formData);
      (event.target as HTMLFormElement).reset();
      this.setState({
        isNameValid: false,
        isAvatarValid: false,
        isAgreeValid: false,
        isValidationVisible: false,
      });
    } else {
      this.setState({ isValidationVisible: true });
      this.props.onFormSubmit(null);
    }
  };

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
          <p
            className="validation"
            style={{
              visibility:
                this.state.isValidationVisible && !this.state.isNameValid ? 'visible' : 'hidden',
            }}
          >
            Name is required and should have length minimum 4 characters
          </p>
        </label>
        <label>
          Date of birth:
          <input type="date" ref={this.formControls.birthday} />
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
        <p
          className="validation"
          style={{
            visibility:
              this.state.isValidationVisible && !this.state.isAvatarValid ? 'visible' : 'hidden',
          }}
        >
          Card looks ugly withot image, so choosing the image is required
        </p>
        <label>
          I never read tearms and conditions
          <input type="checkbox" ref={this.formControls.agree} />
          <p
            className="validation"
            style={{
              visibility:
                this.state.isValidationVisible && !this.state.isAgreeValid ? 'visible' : 'hidden',
            }}
          >
            This checkmark is required
          </p>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
