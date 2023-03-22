import React from 'react';
import './Toast.component.css';
import { Notification } from '../../mock/notifications';

interface Props {
  position: string;
  list: Notification[];
  onCloseToast: (id: number) => void;
}

interface State {
  list: Notification[];
}
export class Toast extends React.Component<Props, State> {
  //   constructor(props: Props) {
  //     super(props);
  //     this.state = {
  //       list: this.props.list,
  //     };
  //     console.log(this.props.list);
  //   }
  render() {
    return (
      <div className={`notification-container ${this.props.position}`}>
        {this.props.list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${this.props.position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => toast.id && this.props.onCloseToast(toast.id)}>X</button>
            <div>
              <p>{toast.id}</p>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
