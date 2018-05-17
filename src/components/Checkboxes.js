import React, { Component } from 'react';

import CheckboxField from './CheckboxField';
import colors from '../theme/colors';

export default (props) => (
  <div style={styles.container}>
    <CheckboxField
      name='includePrimaryCiInsurance'
      label='Include Primary CI Insurance'
    />

    <CheckboxField
      name='includeSecondaryCiInsurance'
      label='Include Secondary CI Insurance'
    />

    <CheckboxField
      name='primaryIllness'
      label='Primary Illness'
    />

    <CheckboxField
      name='secondaryIllness'
      label='Secondary Illness'
    />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    padding: '10px 15px',
    marginBottom: '2px',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    // height: '200px',
    // maxWidth: '60%',
    // width: '100%',
    // flexWrap: 'wrap',
  },
};
