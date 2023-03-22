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

  autoClose!: ReturnType<typeof setTimeout>;

  handleFormSubmit(data: formData) {
    this.setState({ cards: [...this.state.cards, data] });
    this.showToast('success');
  }

  showToast(type: string) {
    const id = Math.floor(Math.random() * 100 + 1);
    let toastProperties: Notification = {};
    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'Form was successfully submitted',
          backgroundColor: 'rgb(0 225 0)',
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
    this.setState({ toastList: [...this.state.toastList, toastProperties] });
    this.autoClose = setTimeout(() => this.closeToast(id), 3000);
  }

  closeToast = (id: number) => {
    this.setState({ toastList: [...this.state.toastList.filter((i) => i.id !== id)] });
    clearTimeout(this.autoClose);
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
