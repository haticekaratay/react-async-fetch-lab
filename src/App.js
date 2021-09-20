import React, {Component} from "react"

class App extends Component {
    state = {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => {
            console.log(data.people)
            this.setState({people: data.people})
        })
    }

    render(){
        return(
            <div>
                {this.state.people.map((person,i)=>{
                    return <li>{person.name}</li>
                })}
            </div>
        )
    }
}
export default App