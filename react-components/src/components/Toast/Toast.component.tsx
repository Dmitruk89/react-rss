import React from 'react';
import './Toast.component.css';
import { Notification } from '../../mock/notifications';
import { useDispatch } from 'react-redux';

import { closeToast } from '../../features/toast/toastSlice';
interface Props {
  position: string;
  list: Notification[];
}
export function Toast(props: Props) {
  const dispatch = useDispatch();
  let autoClose!: ReturnType<typeof setTimeout>;

  const onToastClose = (id: number) => {
    dispatch(closeToast(id));
    clearInterval(autoClose);
  };

  return (
    <div className={`notification-container ${props.position}`}>
      {props.list.map((toast, i) => {
        autoClose = setTimeout(() => toast.id && dispatch(closeToast(toast.id)), 3000);

        return (
          <div
            key={i}
            onClick={() => toast.id && onToastClose(toast.id)}
            className={`notification toast ${props.position}`}
            style={{ borderLeft: 'solid ' + '8px ' + toast.backgroundColor }}
          >
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
