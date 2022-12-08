import React, { Component } from 'react'
import './List'
import List from './List'

class App extends Component {
  constructor() {
    super()
    this.state = ({
      inputVal: '',
      output: []
    })
  }
  handleChnge = (event) => {

    this.setState({
      inputVal: event.target.value,

    })
  }

  handleClick = () => {
    const { inputVal, output } = this.state
    output.push({name: inputVal, completed: false})
    this.setState({
      output,
      inputVal: ''
    })
  }

  handleCheck = (event, item) => {
    const{output}=this.state
   console.log({'checked': event.target.checked, item})
    const index = output.findIndex(function(task){
        return task.name === item.name
    })
    output[index].completed = event.target.checked
    this.setState({
      output
    })

  }
 
  
  render() {
    const { output, inputVal } = this.state
    return (
      <>
        <input type='text' value={inputVal} onChange={(event) => this.handleChnge(event)} />
        <button onClick={() => this.handleClick()}>Add</button>

        <List data={output}  handleCheck ={(event ,item)=>this.handleCheck(event , item)}/>


      </>
    )
  }
}

export default App;
