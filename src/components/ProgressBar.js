import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const HorizontalLine = styled.View`
  height: 9;
  background-color: ${props => props.color || '#d8d8d8'};

  width: ${Dimensions.get('window').width / 5 - 4};
  margin-top: 27;
  margin-bottom: 30;
  margin-left: 2;
  margin-right: 2;
`;
export default class ProgessBar extends React.Component {
  renderProgess = () => {
    var progress = [];

    for (var i = 0; i < this.props.steps; i++) {
      progress.push(<HorizontalLine color={this.props.color} key={i} />);
    }

    return progress;
  };

  render = () => {
    return <View style={styles.containerStyle}>{this.renderProgess()}</View>;
  };
}
styles = {
  containerStyle: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 10,
    justifyContent: 'flex-start',
  },
};
