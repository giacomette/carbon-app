import React from "react";
import { Text, View } from "react-native";

const RecordTimeStamp = props => {
  const getMMSSFromMillis = millis => {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  };

  const getRecordingDurationTimestamp = () => {
    if (props.recordStatus === "RECORDING_COMPLETE") {
      return getMMSSFromMillis(props.durationMillis);
    }
    return "00:00";
  };

  const getRecordingTimestamp = () => {
    if (props.recordingDuration != null) {
      return `${getMMSSFromMillis(props.recordingDuration)}`;
    }
    return `${getMMSSFromMillis(0)}`;
  };

  if (props.recordStatus === "RECORDING") {
    return <Text style={props.timeStampStyle}>{getRecordingTimestamp()}</Text>;
  } else {
    return (
      <Text style={props.timeStampStyle}>
        {getRecordingDurationTimestamp()}
      </Text>
    );
  }
};

export default RecordTimeStamp;
