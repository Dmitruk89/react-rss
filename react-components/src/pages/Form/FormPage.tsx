import { Form } from '../../components/Form/Form.component';
import React from 'react';
import { FormCard } from '../../components/FormCardComponent/FormCard.component';
import '../../App.css';
import { Toast } from '../../components/Toast/Toast.component';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

export const FormPage = () => {
  const userCards = useSelector((state: RootState) => state.form.users);
  const toastList = useSelector((state: RootState) => state.toast.toastList);

  return (
    <div>
      <h1>Form page</h1>
      <Form />
      <div className="card_container">
        {userCards.map((data, i) => {
          return <FormCard key={i} formData={data} />;
        })}
      </div>
      <Toast list={toastList} position="top-left" />
    </div>
  );
};
