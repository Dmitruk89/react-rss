import { Form, formData } from '../components/Form/Form.component';
import React from 'react';
import { FormCard } from '../components/FormCardComponent/FormCard.component';
import '../App.css';
import { Toast } from '../components/Toast/Toast.component';
import { Notification } from '../mock/notifications';

interface Props {
  children?: React.ReactNode;
}

interface State {
  formData: null | formData;
  cards: formData[];
  toastList: Notification[];
}

export class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formData: null,
      cards: [],
      toastList: [],
    };
  }

  handleFormSubmit(data: formData) {
    this.setState({ cards: [...this.state.cards, data] });
    this.showToast('success');
  }

  showToast(type: string) {
    console.log('show toast!!');

    const id = Math.floor(Math.random() * 100 + 1);
    let toastProperties: Notification = {};
    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
        };
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is an error toast component',
          backgroundColor: '#d9534f',
        };
        break;
      default:
        this.setState({ toastList: [] });
    }
    console.log(toastProperties);

    this.setState({ toastList: [...this.state.toastList, toastProperties] });
  }

  closeToast = (id: number) => {
    this.setState({ toastList: [...this.state.toastList.filter((i) => i.id !== id)] });
  };
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
        <Toast list={this.state.toastList} onCloseToast={this.closeToast} position="top-left" />
      </div>
    );
  }
}
