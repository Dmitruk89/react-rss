import React, { useEffect } from 'react';
import './Form.component.css';

import { genders } from '../../mock/genders';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/form/formSlice';
import { formData } from 'types/formData';
import { showError, showSuccess } from '../../features/toast/toastSlice';

export function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = (formData) => {
    formData = { ...formData, avatarUrl: handleAvatarInput(formData.avatarFile) };
    dispatch(addUser(formData));
    dispatch(showSuccess());
  };

  useEffect(() => {
    if (formState.isSubmitted && !formState.isValid) {
      dispatch(addUser(null));
      dispatch(showError());
    }
  }, [formState.isSubmitted, dispatch, formState.isValid]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const handleAvatarInput = (fileList: FileList) => {
    const images = [];
    images.push(URL.createObjectURL(fileList[0]));
    return images[0];
  };

  const genderOptions = genders.map((gen, i) => {
    return (
      <option key={i} value={gen}>
        {gen}
      </option>
    );
  });
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input
          type="text"
          {...register('name', {
            required: 'This input is required.',
            pattern: {
              value: /[A-Za-z0-9]/,
              message: 'This input is letters and digits only.',
            },
            minLength: {
              value: 4,
              message: 'Minimum 4 letters',
            },
          })}
        />
        <p className="validation">
          {errors.name && 'Name is required and should have length minimum 4 characters'}
        </p>
      </label>
      <label>
        Date of birth:
        <input type="date" {...register('birthday')} />
      </label>
      <label>
        Choose your gender:
        <select {...register('gender')}>
          <option value="">--Please choose an option--</option>
          {genderOptions}
        </select>
      </label>
      <fieldset>
        <legend>Want to subscribe to our spam?</legend>
        <div>
          <label>
            Sure
            <input type="radio" value="yes" {...register('spam')} defaultChecked />
          </label>
        </div>
        <div>
          <label>
            No way!
            <input type="radio" {...register('spam')} value="no" />
          </label>
        </div>
      </fieldset>
      <label>
        Upload your avatar
        <input
          type="file"
          {...register('avatarFile', {
            required: 'Card looks ugly withot image, so choosing the image is required',
          })}
        />
        <p className="validation">{'' || (errors.avatarFile && errors.avatarFile.message)}</p>
      </label>
      <label>
        I never read tearms and conditions
        <input
          type="checkbox"
          {...register('agree', {
            required: 'This checkmark is required',
          })}
        />
        <p className="validation">{errors.agree && errors.agree.message}</p>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
