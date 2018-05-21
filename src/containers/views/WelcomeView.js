import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import rest from '../../utils/rest';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import WelcomeMessage from '../../components/WelcomeMessage';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  openPreview: () =>
    dispatch(
      rest.actions.updateReadMessages(
        {},
        { body: JSON.stringify({ messageIdArr: [1, 2, 3] }) },
      ),
    ),

  openSignUp: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'SignUp',
      }),
    ),
  openTabs: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'Tabs',
      }),
    ),
  openSignIn: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'SignIn',
      }),
    ),
});

export class WelcomeView extends React.Component {
  componentDidMount() {
    this.userAlreadyLoggedIn();
  }

  userAlreadyLoggedIn = () => {
    if (this.props.auth && this.props.auth.data.decoded) {
      this.props.openTabs();
    }
  };

  render = () => {
    return (
      <Background color="blue">
        <WelcomeMessage />
        <Footer>
          <Button
            text="Join"
            primary
            width="md"
            onPress={this.props.openSignUp}
          />
          <Button text="Log In" width="md" onPress={this.props.openSignIn} />
        </Footer>
      </Background>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);
