import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
  Switch,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
 
function App() {
  return (
    <View>
      <Todo />
    </View>
  );
}
 
class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasklist:[],
      datelist:[],
      markedlist:[],
      taskinput:'',
      taskdate:'',
      marked:false
    }
  }
 
  deleteTask = (index) => {
    this.setState(state => {
      const Tasks = [...this.state.tasklist];
      Tasks.splice(index, 1);
      const marked = [...state.markedlist]
      marked.slice(index,1)
      return {
        tasklist: Tasks,
        markedlist : marked
      };
    });
  };
 
  displayDate = date =>{
    this.setState({
      taskdate:date
    });
  }
 
  displayText = text => {
    console.log(text,"text")
    this.setState({
      taskinput:text
    });
  }
 
  addTask = () => {
    console.log(this.state.taskinput)
    this.setState(state => ({
      tasklist:[...state.tasklist,state.taskinput],
      taskinput:"",
      datelist:[...state.datelist,state.taskdate],
      markedlist:[...state.markedlist, false]
    }));
  }
 toggleSwitch = (event, index) => {
   let pos = index
  // let pos = this.state.tasklist.indexOf(data);
  this.state.markedlist[pos] = !this.state.markedlist[pos]
  this.setState({
    tasklist:this.state.tasklist,
    marked : !this.state.marked
  })
 }
  render(){
    const alltasks = this.state.tasklist.map((data, index) => {
            return (
              <View>
                {this.state.markedlist[index] ? 
 
                    <Text style={{textDecorationLine:'line-through'}}> {data} </Text> : 
                    <Text> {data} </Text>
                    }
                 <Text>
                {this.state.datelist[index]}
                </Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.markedlist[index] ? "#00bfff" : "#f4f3f4"}
                        onValueChange={(event) => this.toggleSwitch(event, index)}
                        value={this.state.markedlist[index]}
                        style={{margin : 10}}/>
 
                <Button onPress={()=>this.deleteTask(index)} title="Delete" />
              </View>
              );
          });
    return(
      <View>
        <Text>Todo List</Text>
        <TextInput placeholder="You task here" value={this.state.taskinput} onChangeText={this.displayText}></TextInput>
        <Text>Select Date</Text>
          <DatePicker
          value={this.state.date}
          onDateChange={this.displayDate}
          type="date"
          />
        <Button onPress={this.addTask} title = "Add task" />
        <ScrollView>{alltasks}</ScrollView>
      </View>
    )
  }
}
 
export default App;