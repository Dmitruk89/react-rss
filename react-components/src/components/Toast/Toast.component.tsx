import React from 'react';
import './Toast.component.css';
import { Notification } from '../../mock/notifications';

interface Props {
  position: string;
  list: Notification[];
  onCloseToast: (id: number) => void;
}
export function Toast(props: Props) {
  return (
    <div className={`notification-container ${props.position}`}>
      {props.list.map((toast, i) => (
        <div
          key={i}
          onClick={() => toast.id && props.onCloseToast(toast.id)}
          className={`notification toast ${props.position}`}
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
