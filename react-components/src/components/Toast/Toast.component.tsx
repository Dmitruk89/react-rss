import React from 'react';
import './Toast.component.css';
import { Notification } from '../../mock/notifications';

interface Props {
  position: string;
  list: Notification[];
  onCloseToast: (id: number) => void;
}
export class Toast extends React.Component<Props> {
  render() {
    return (
      <div className={`notification-container ${this.props.position}`}>
        {this.props.list.map((toast, i) => (
          <div
            key={i}
            onClick={() => toast.id && this.props.onCloseToast(toast.id)}
            className={`notification toast ${this.props.position}`}
            style={{ borderLeft: 'solid ' + '8px ' + toast.backgroundColor }}
          >
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
