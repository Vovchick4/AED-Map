﻿import * as Yup from 'yup';

const FormValidation = Yup.object().shape({
  address: Yup.string().required('Поле обов\'язкове'),
  title: Yup.string()
    .required('Поле обов\'язкове')
    .matches(
      /[^\S]*([A-zА-я]|\d)+/gim,
      'Формат вводу неправильний,поле повинно містити букви'
    ),
  phone: Yup.array().of(
    Yup.string()
      .required('Формат номеру неправильний')
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s)\.]?[0-9]{2}[-\s)\.]?[0-9]{2}$/im,
        'Формат номеру неправильний'
      )
  ),
  storage_place: Yup.string()
    .required('Поле обов\'язкове')
    .matches(
      /[^\S]*([A-zА-я]|\d)+/gim,
      'Формат вводу неправильний,поле повинно містити букви'
    ),
  floor: Yup.number()
    .required('Поле обов\'язкове')
    .min(0, 'Значення поля не може бути від\'ємне')
    .max(20, 'Значення поля не може бути вище 20'),
});

export default FormValidation;
