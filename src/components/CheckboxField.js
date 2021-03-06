import React from 'react';
import { Field } from 'redux-form';
import Radium from 'radium';

import colors from '../theme/colors';

const renderCheckbox = ({
  label,
  name,
  disabled,
  medium,
  input,
  input: {
    checked,
    onChange,
  },
}) => (
  <div
    style={[styles.container, medium && styles.medium.container]}
    {...input}
    onClick={() => !disabled && onChange(!checked)}
  >
    <label style={styles.label} htmlFor={name}>
      {label}
    </label>
    <div style={styles.checkbox.container}>
      <input
        {...input}
        type='checkbox'
        style={styles.checkbox.component}
      />
      <div style={[styles.checkbox.box, disabled && styles.checkbox.disabled]} />
      {checked && <div style={styles.checkbox.mark} />}
    </div>
  </div>
);

export default (props) => (
  <Field
    {...props}
    component={Radium(renderCheckbox)}
    type='checkbox'
  />
);

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
  },
  label: {
    fontSize: '13px',
  },
  checkbox: {
    container: {
      position: 'relative',
      display: 'flex',
      width: '13px',
      height: '13px',
      margin: '0 10px',
    },
    component: {
      opacity: 0,
      position: 'absolute',
    },
    box: {
      backgroundColor: colors.green,
      borderRadius: '1px',
      width: '13px',
      height: '13px',
      position: 'absolute',
    },
    mark: {
      position: 'absolute',
      left: '4px',
      top: '2px',
      width: '3px',
      height: '6px',
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
    },
    disabled: {
      backgroundColor: colors.disabledGrey,
    },
  },
  medium: {
    container: {
      width: 'calc(50% - 20px)',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
    },
  },
};
