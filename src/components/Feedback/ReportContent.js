import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedbackHeader from './FeedbackHeader';

const ReportContent = ({
  data,
  navigateBack,
  sendReport,
  onChange,
  onCancel,
}) => {
  const { title, text, reportInput } = styles;
  if (!data.content.reasonTitle) {
    // if the user chooses "i just dont like it" category
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <FeedbackHeader
          navigateBack={navigateBack}
          headerText="Report"
          onCancel={onCancel}
        />
        <View style={{ padding: 30 }}>
          <Text style={[title, { marginBottom: 20 }]}>
            {data.content.title}
          </Text>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={data.content.subtitle}
            multiline={true}
            onChangeText={text => onChange(text)}
            style={reportInput}
          />
        </View>
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={sendReport}
            style={{
              padding: 13,
              width: 200,
              backgroundColor: '#ed7a5f',
              alignItems: 'center',
              borderRadius: 34,
            }}
          >
            <Text
              style={{ alignSelf: 'center', color: '#faf5f0', fontSize: 16 }}
            >
              Report
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 13,
              width: 200,
              alignItems: 'center',
              borderRadius: 34,
              borderWidth: 2,
              borderColor: '#2d4359',
            }}
          >
            <Text
              style={{ alignSelf: 'center', color: '#2d4359', fontSize: 16 }}
            >
              Block
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <FeedbackHeader
        navigateBack={navigateBack}
        headerText="Report"
        onCancel={onCancel}
      />
      <View style={{ padding: 30 }}>
        <Text style={[title, { marginBottom: 10 }]}>{data.content.title}</Text>
        <Text style={[text, { marginBottom: 10 }]}>
          {data.content.subtitle}
        </Text>
        <Text style={text}>{data.content.reasonTitle}</Text>
        {data.content.reasons.map((item, i) => (
          <Text style={text} key={i}>
            {item}
          </Text>
        ))}
        <Text style={[text, { marginTop: 30 }]}>
          {data.content.confidential}
        </Text>
      </View>
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={sendReport}
          style={{
            padding: 13,
            width: 200,
            backgroundColor: '#ed7a5f',
            alignItems: 'center',
            borderRadius: 34,
          }}
        >
          <Text style={{ alignSelf: 'center', color: '#faf5f0', fontSize: 16 }}>
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            padding: 13,
            width: 200,
            alignItems: 'center',
            borderRadius: 34,
            borderWidth: 2,
            borderColor: '#2d4359',
          }}
        >
          <Text style={{ alignSelf: 'center', color: '#2d4359', fontSize: 16 }}>
            Block
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 15,
    color: '#4a4a4a',
  },
  reportInput: {
    height: 150,
    backgroundColor: '#e8e9e8',
    borderRadius: 33,
    marginLeft: 2,
    marginTop: 4,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'NunitoSans-Regular',
    textAlignVertical: 'top',
  },
  text: {
    color: '#949795',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 13,
  },
};
export default ReportContent;