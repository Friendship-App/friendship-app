import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { TouchableHighlight, View, Text } from 'react-native';

const styles = {
  inboxCard: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 24,
  },
  inboxCardHeader: {
    flexDirection: 'row',
  },
  inboxCardName: {
    fontSize: 18,
    color: '#4a4a4a',
  },
  inboxCardTime: {
    position: 'absolute',
    top: 0,
    right: 20,
    fontSize: 10,
    color: '#5c5c5c',
  },
  inboxCardMessage: {
    fontSize: 13,
    color: '#4a4a4a',
  },
  inboxCardIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHolder: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#e8e9e8',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userEmoji: {
    fontSize: 20,
    padding: 8,
  },
  inboxCardContent: {
    flex: 6,
    justifyContent: 'center',
  },
};

const mapDispatchToProps = dispatch => ({
  openChatView: (chatroomId, id, username, userEmoji) =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'ChatView',
        params: { chatroomId, id, username, userEmoji },
      }),
    ),
});

class InboxCard extends React.Component {
  render() {
    const { creator, receiver, messages } = this.props.data;
    const lastMessage = messages[messages.length - 1];
    const lastMessageText =
      lastMessage.text_message.length > 35
        ? lastMessage.text_message.slice(0, 35) + '...'
        : lastMessage.text_message;
    const userId =
      this.props.currentUserId == creator.id ? receiver.id : creator.id;
    const username =
      this.props.currentUserId == creator.id
        ? receiver.username
        : creator.username;
    const emoji =
      this.props.currentUserId == creator.id ? receiver.emoji : creator.emoji;
    return (
      <TouchableHighlight
        onPress={() =>
          this.props.openChatView(this.props.data.id, userId, username, emoji)}
        underlayColor={'#ddd'}
      >
        <View style={styles.inboxCard}>
          <View style={styles.inboxCardIcon}>
            <View style={styles.iconHolder}>
              <Text style={styles.userEmoji}>{emoji}</Text>
            </View>
          </View>
          <View style={styles.inboxCardContent}>
            <View style={styles.inboxCardHeader}>
              <Text style={styles.inboxCardName}>{username}</Text>
              <Text style={styles.inboxCardTime}>Time</Text>
            </View>
            <Text style={styles.inboxCardMessage}>{lastMessageText}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.data.decoded ? state.auth.data.decoded.id : null,
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxCard);