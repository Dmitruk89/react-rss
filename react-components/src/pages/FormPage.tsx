import { Form, formData } from '../components/Form/Form.component';
import React from 'react';
import { FormCard } from '../components/FormCardComponent/FormCard.component';
import '../App.css';

interface Props {
  children?: React.ReactNode;
}

interface State {
  formData: null | formData;
  cards: formData[];
}

export class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formData: null,
      cards: [],
    };
  }

  handleFormSubmit(data: formData) {
    this.setState({ cards: [...this.state.cards, data] });
  }
  render() {
    return (
      <div>
        <h1>Form page</h1>
        <Form onFormSubmit={this.handleFormSubmit.bind(this)} />
        <div className="card_container">
          {this.state.cards.map((data, i) => {
            return <FormCard key={i} formData={data} />;
          })}
        </div>
      </div>
    );
  }
}
