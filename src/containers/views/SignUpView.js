import React from 'react';
import { connect } from 'react-redux';
import rest from '../../utils/rest';
import { ViewContainer, Padding, Centered } from '../../components/Layout';
import TextInput from '../../components/TextInput';
import RoundTab from '../../components/RoundTab';
import styled from 'styled-components/native';
import { NavigationActions } from 'react-navigation';

import {
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
  FlatList,
} from 'react-native';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  // signUp: credentials => {
  //   dispatch(
  //     rest.actions.users.post({}, { body: JSON.stringify(credentials) }),
  //   );
  // },
  signUp: credentials => {
    dispatch(rest.actions.register({}, { body: JSON.stringify(credentials) }))
      .then(() =>
        dispatch(
          NavigationActions.navigate({
            routeName: 'SignUpPersonality',
          }),
        ),
      )
      .catch(err => console.log(err));
  },
  openSignUpPersonality: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'SignUpPersonality',
      }),
    ),
  openSignIn: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'SignIn',
      }),
    ),
  openWelcomeScreen: () =>
    dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
      }),
    ),
});

class SignUpView extends React.Component {
  componentWillMount() {
    if (this.props.auth.data.decoded) {
      this.props.openSignUpPersonality();
    }
  }

  componentWillReceiveProps() {
    this.setState({ error: true });
  }

  static navigationOptions = {
    title: 'Sign up',
    header: () => null,
  };

  state = {
    email: '',
    password: '',
    error: false,
    validationError: '',
  };

  renderStatus() {
    if (this.state.validationError) {
      return (
        <Text style={styles.statusTextStyle}>{this.state.validationError}</Text>
      );
    }
    const { data, error, loading } = this.props.auth;
    let status = '';
    if (data.decoded) {
      status = `Signed in as ${data.decoded.email}`;
    }
    if (this.state.error && error) {
      status = `Error ${error.statusCode}: ${error.message}`;
    }
    if (loading) {
      status = `Loading ...`;
    }

    return <Text style={styles.statusTextStyle}>{status}</Text>;
  }

  signUp() {
    const { email, password } = this.state;
    if (!email || !password) {
      return this.setState({
        validationError: 'Please enter both email & password!',
      });
    }
    this.props.signUp({ email, password });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ViewContainer>
          <HeaderWrapper>
            <SignUpTitle>YOUR PROFILE</SignUpTitle>
            <LabelText style={{ marginTop: 24, marginLeft: 30 }}>
              ADD PHOTO(S)
            </LabelText>
            <ScrollViewPhoto
              contentContainerStyle={styles.scrollViewPhotoContainer}
              horizontal
            >
              <PhotoBox style={{ backgroundColor: '#949795' }}>
                <PlusSignText>+</PlusSignText>
              </PhotoBox>
              <PhotoBox>
                <PlusSignText>+</PlusSignText>
              </PhotoBox>
              <PhotoBox>
                <PlusSignText>+</PlusSignText>
              </PhotoBox>
              <PhotoBox>
                <PlusSignText>+</PlusSignText>
              </PhotoBox>
              <PhotoBox>
                <PlusSignText>+</PlusSignText>
              </PhotoBox>
            </ScrollViewPhoto>
          </HeaderWrapper>
          <FirstLabelWrapper>
            <LabelText style={{ marginTop: 21, marginLeft: 30 }}>
              PICK YOUR MOOD
            </LabelText>
            {/* change to FlatList later on to render form database? */}
            <ScrollViewPhoto
              contentContainerStyle={styles.scrollViewMoodContainer}
              horizontal
              style={{ height: 77, marginTop: 22 }}
            >
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
              <MoodImageContainer>
                <MoodImage
                  source={{
                    uri:
                      'https://www.emojibase.com/resources/img/emojis/apple/x1f422.png.pagespeed.ic.Kl0AHX0uMQ.png',
                  }}
                />
              </MoodImageContainer>
            </ScrollViewPhoto>
            <FirstLabelContainer>
              <LabelView>
                <LabelTextInput
                  placeholderTextColor="#4a4a4a"
                  placeholder="(NICK)NAME*"
                />
              </LabelView>
              <LabelTextHelper>(visible)</LabelTextHelper>
            </FirstLabelContainer>
            <FirstLabelContainer>
              <LabelView>
                <LabelTextInput
                  placeholderTextColor="#4a4a4a"
                  placeholder="EMAIL*"
                />
              </LabelView>
              <LabelTextHelper>(private)</LabelTextHelper>
            </FirstLabelContainer>
            <FirstLabelContainer style={{ height: 55 }}>
              <LabelView>
                <LabelTextInput
                  placeholderTextColor="#4a4a4a"
                  placeholder="PASSWORD*"
                />
              </LabelView>
            </FirstLabelContainer>
          </FirstLabelWrapper>

          <Padding style={{ flex: 1 }}>
            <Centered style={{ flex: 2 }}>
              <TextInput
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                titleColor="#f9f7f6"
                title="EMAIL"
                placeholder="HELLO@FRIENDSHIP.COM"
                backColor="#faf6f0"
                onChangeText={email =>
                  this.setState({ email, validationError: '', error: false })}
                value={this.state.email}
              />
              <TextInput
                returnKeyType="go"
                secure
                title="PASSWORD"
                titleColor="#f9f7f6"
                placeholder="*******"
                backColor="#faf6f0"
                onChangeText={password =>
                  this.setState({
                    password,
                    validationError: '',
                    error: false,
                  })}
                value={this.state.password}
              />
              {this.renderStatus()}
            </Centered>
          </Padding>
          <TouchableOpacity onPress={() => this.signUp()}>
            <RoundTab
              title="Sign Up"
              style={{ flex: 1 }}
              onPress={() => this.signUp()}
            />
          </TouchableOpacity>
        </ViewContainer>
      </KeyboardAvoidingView>
    );
  }
}

const HeaderWrapper = styled.View`
  width: 100%;
  height: 244;
  margin-top: 20;
  display: flex;
  flex-direction: column;
  background-color: #e8e9e8;
`;

const FirstLabelWrapper = styled.View`
  width: 100%;
  height: 427;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f9f7f6;
  padding-bottom: 16;
`;

const SignUpTitle = styled.Text`
  width: 320;
  height: 45;
  font-family: 'Friendship_version_2';
  font-size: 40;
  line-height: 45;
  text-align: justify;
  color: #839297;
  margin-left: 30;
  margin-right: 10;
  margin-top: 37;
`;

const LabelView = styled.View`
  width: 278;
  border-bottom-width: 2;
  border-bottom-color: #979797;
  margin-left: 30;
`;

const LabelText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 18;
  color: #4a4a4a;
  text-align: left;
`;

const LabelTextInput = styled.TextInput``;

const LabelTextHelper = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14;
  margin-left: 30;
  color: #9b9b9b;
`;

const PlusSignText = styled.Text`
  padding: 0;
  font-size: 50;
  font-weight: 400;
  color: #60686d;
  text-align: center;
`;

const PhotoBox = styled.View`
  width: 93;
  height: 93;
  background-color: #e8e9e8;
  margin-right: 15;
  border-width: 1;
  border-color: #839297;
  justify-content: center;
`;

const ScrollViewPhoto = styled.ScrollView`margin-top: 11;`;

const MoodImageContainer = styled.View`
  height: 70;
  width: 70;
  background-color: #ffffff;
  border-radius: 35;
  justify-content: center;
  align-items: center;
  margin-right: 12;
`;

const MoodImage = styled.Image`
  width: 48;
  height: 48;
`;

const FirstLabelContainer = styled.View`
  height: 77;
  width: 100%;
  margin-top: 10;
`;

const styles = {
  headerText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 20,
    color: '#ff8a65',
  },
  buttonTextStyle: {
    width: 230,
    height: 27,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    color: 'white',
  },
  statusTextStyle: {
    fontFamily: 'NunitoSans-Regular',
    width: '100%',
    height: 20,
    fontSize: 15,
    textAlign: 'center',
    color: '#f673f7',
    marginBottom: 10,
  },
  textStyle: {
    fontFamily: 'NunitoSans-Regular',
    width: '100%',
    height: 20,
    fontSize: 15,
    textAlign: 'center',
    color: '#f9f7f6',
    marginBottom: 10,
  },
  placeholderTextStyle: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 18,
    color: '#4a4a4a',
    textAlign: 'left',
  },
  scrollViewPhotoContainer: {
    justifyContent: 'space-around',
    height: 93,
    paddingRight: 23,
    paddingLeft: 23,
  },
  scrollViewMoodContainer: {
    justifyContent: 'space-around',
    height: 70,
    paddingRight: 23,
    paddingLeft: 23,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
