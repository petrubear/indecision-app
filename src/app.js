/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp options={[]}/>, appRoot);
