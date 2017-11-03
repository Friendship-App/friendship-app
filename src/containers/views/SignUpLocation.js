import React from 'react';
import { connect } from 'react-redux';
import { SignUpViewWrapper, SignUpWrapper } from '../../components/Layout';
import { Image, View } from 'react-native';
import TextInput from '../../components/TextInput';
import styled from 'styled-components/native';
import RoundTab from '../../components/RoundTab';
import data from '../../../assets/misc/municipalities.json';
import MultiSelect from '../../utils/react-native-multiple-select';

const mapDispatchToProps = dispatch => ({});

const SignUpDivWrapper = styled.View`
  display: flex;
  background-color: #efebe9;
  width: 100%;
`;

/* Wrapper for the text */
const SignUpTitle = styled.Text`
  width: 121;
  height: 45;
  font-family: 'Friendship_version_2';
  font-size: 40;
  line-height: 45;
  text-align: justify;
  color: #2d4359;
`;

const SignUpWelcomeText = styled.Text`
  width: 300;
  height: 90;
  font-family: 'NunitoSans-Regular';
  font-size: 15;
  font-weight: 300;
  line-height: 25;
  color: #2d4359;
  text-align: justify;
  padding-top: 15;
`;

export class SignUpLocation extends React.Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <SignUpWrapper>
        <SignUpDivWrapper
          style={{
            paddingTop: 60,
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: 'transparent',
            flex: 2,
          }}
        >
          <SignUpTitle>HEY!</SignUpTitle>
          <SignUpWelcomeText>
            With this information, we will find the people closest to you.
          </SignUpWelcomeText>
        </SignUpDivWrapper>

        <SignUpDivWrapper style={{ flex: 8, justifyContent: 'center' }}>
          <View style={{ height: 100, width: 400, zIndex: 33 }}>
            <MultiSelect
              style={{ borderRadius: 27, backgroundColor: '#faf5f0' }}
              hideTags
              items={data}
              uniqueKey="id"
              ref={component => {
                multiSelect = component;
              }}
              hideSubmitButton={true}
              fixedHeight={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="REGION*"
              searchInputPlaceholderText="Search municipalities..."
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#fff"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              searchInputStyle={{ color: '#000' }}
            />
          </View>
          <TextInput
            backColor="#faf5f0"
            title="WHAT'S YOUR NEIGHBORHOOD ?"
            placeholder="LABEL"
          />
        </SignUpDivWrapper>
        <RoundTab title="NEXT" />
      </SignUpWrapper>
    );
    const { selectedItems } = this.state;
  }

  static navigationOptions = {
    title: 'SignUpLocation',
    header: () => null,
  };
}

export default connect(undefined, mapDispatchToProps)(SignUpLocation);
