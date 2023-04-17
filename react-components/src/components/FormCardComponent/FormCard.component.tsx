import { formData } from '../../types/formData';
import React from 'react';
import './FormCard.component.css';

type FormCardProps = {
  key: number;
  formData: formData | null;
};

export function FormCard(props: FormCardProps) {
  return (
    <div className="form_card">
      <h3>{props.formData?.name}</h3>
      <p>was born: {props.formData?.birthday}</p>
      <p>gender: {props.formData?.gender}</p>
      <img src={props.formData?.avatarUrl?.valueOf()} alt="avatar" />
      <p>agree to get spam: {props.formData?.spam}</p>
      <p>terms and conditions checked: {props.formData?.agree}</p>
    </div>
  );
}
