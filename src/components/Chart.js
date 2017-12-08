import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import numeral from 'numeral';

import colors from '../theme/colors';

export default class Chart extends Component {
  render() {
    const {
      data,
    } = this.props;

    return (
      <div style={styles.container}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 50 }}>
             <XAxis
               name='Age'
               dataKey='age'
               minTickGap={30}
               padding={{ left: 30, right: 30 }}
               interval='preserveStartEnd'
             />
             <YAxis
               tickFormatter={(val) => numeral(val).format('$0,0')}
             />
             <CartesianGrid strokeDasharray='3 3'/>
             <Tooltip
               formatter={(val) => numeral(val).format('$0,0')}
             />
             <Legend
               margin={{ top: 20 }}
             />
             <Line type='monotone' name='Our Plan' dataKey='portfoliosReturn' stroke='#2F5DEA' />
             <Line type='monotone' name='Mutual Funds' dataKey='mutualFundsReturn' stroke='#E75854' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '60vh',
    margin: '0 auto',
  },
};
