import { formData } from 'components/Form/Form.component';
import React from 'react';
import './FormCard.component.css';

type FormCardProps = {
  key: number;
  formData: formData | null;
};

export class FormCard extends React.Component<FormCardProps> {
  constructor(props: FormCardProps) {
    super(props);
  }
  render() {
    return (
      <div className="form_card">
        <h3>{this.props.formData?.name}</h3>
        <p>was born: {this.props.formData?.birthday}</p>
        <p>gender: {this.props.formData?.gender}</p>
        <img src={this.props.formData?.avatar?.valueOf()} alt="avatar" />
        <p>agree to get spam: {this.props.formData?.spam}</p>
        <p>terms and conditions checked: {this.props.formData?.agree}</p>
      </div>
    );
  }
}
