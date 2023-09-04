import { Fragment } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 

import { styles } from "./styles";

type Props = {
  taskUnit: string;
  taskStatus: boolean;
  handleCheck: () => void;
  handleTrash: () => void;
  index: number;
};

export default function List({ taskUnit, taskStatus, handleCheck, handleTrash, index }: Props) {
  return (
    <Fragment>
      <View style={styles.tasksArea}>
        <View style={styles.tasksBg}>
          <TouchableOpacity onPress={() => handleCheck(index)}>
            <Feather name={taskStatus ? "check-circle" : "circle"} size={24} color={taskStatus ? '#5E60CE' : '#4EA8DE'} />
          </TouchableOpacity>
          <Text style={taskStatus ? styles.tasksTextChecked : styles.tasksText}>{taskUnit}</Text>

          <TouchableOpacity onPress={() => handleTrash(taskUnit)}>
            <Feather name="trash-2" size={24} color="#808080" />  
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}

