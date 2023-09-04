import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { Fragment, useState } from "react";
import List from "../List";

interface Task {
  task: string;
  taskStatus: boolean;
}

export default function Header() {
  const [taskName, setTaskName] = useState<string>("");
  const [taskCreated, setTaskCreated] = useState<Task[]>([]);
  const [taskChecked, setTaskChecked] = useState(0)

  function handleTaskAdd() {
    console.log(taskName);

    setTaskCreated((prevState) => [
      ...prevState,
      {
        task: taskName,
        taskStatus: false,
      },
    ]);

    setTaskName("");
  }

  function handleChecked(index: number) {
    let countTasks = 0;

    const tempTask = (taskCreated[index].taskStatus =
      !taskCreated[index].taskStatus);
    setTaskCreated((prevState) => [...prevState]);

    if(tempTask === true){
        setTaskChecked(
            countTasks = taskChecked + 1
        )
    }else{
        setTaskChecked(
            countTasks = taskChecked - 1
        )
    }


  }

  function handleTrash(taskName: string) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa: ${taskName}`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTaskCreated((prevState) =>
              prevState.filter((prevState) => prevState.task !== taskName)
            ),
        },

        {
          text: "Não",
        },
      ]
    );
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Image source={require("../../assets/Logo.png")} style={styles.Logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setTaskName}
            value={taskName}
            placeholder="Digite aqui sua tarefa"
            placeholderTextColor={"#808080"}
          />

          <TouchableOpacity style={styles.btnAdd} onPress={handleTaskAdd}>
            <Text style={styles.btnAddText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasks}>
        <View>
          <Text style={styles.tasksCreated}>
            Criadas <Text>{taskCreated.length}</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.tasksFinished}>
            Concluidas <Text>{taskChecked}</Text>
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={taskCreated}
          keyExtractor={(item) => item.task}
          renderItem={({ item, index }) => (
            <List
              taskUnit={item.task}
              taskStatus={item.taskStatus}
              handleCheck={handleChecked}
              handleTrash={handleTrash}
              index={index}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Feather name="calendar" size={45} color="#adadad" />
              <Text style={styles.listEmptyText}>
                Você não possui nenhuma tarefa cadastrada.
              </Text>
            </View>
          )}
        />
      </View>
    </Fragment>
  );
}
