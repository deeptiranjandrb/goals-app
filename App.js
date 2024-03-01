import {StyleSheet,  View, Button,FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    if(enteredGoalText !== '')
      setCourseGoals((prev) => [...prev, {text:enteredGoalText,id: Math.random().toString()}]);
    setModalIsVisible(false);
  }
  function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoal => currentCourseGoal.filter((goal) => goal.id !== id));
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#a441d5' onPress={() => setModalIsVisible(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} closeModal={setModalIsVisible} />
      <View style={styles.goalsContainer}>
        <FlatList renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoalHandler} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        data={courseGoals}
        alwaysBounceVertical={false} />
  
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  
  goalsContainer: {
    flex: 5,
  },
  
});
