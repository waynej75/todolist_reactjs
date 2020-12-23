componentDidMount () {// just rendered
    this.intervalId = setInterval(()=> {
        let {opcity} = this.state
        opacity -= 0.1
        
        this.setState({opacity})
    })
}
componentWillUnmount () { //before dead
    clearInterval(this.intervalId)
}

constructor(props) {
    super(props)
    this.state = {
        stateprop1 : value1,
        stateprop2: value2
    }
}
// read
const stateprop1 = this.state.stateprop1
const {stateprop1} = this.state
// updaate
this.setState({
    state1 : value3
})

add () {
    const todo = this.todoinput.value
}
<input ref={input => this.todoinput = input}/>