import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class List extends React.Component {
    constructor(props){
        super()
        this.state = {
            itemArray: props.items,
            currentIndex: 0,
            red: 91,
            green: 109,
            blue: 122
        }
    }

    //colorFiddle is called by all eventListeners (need to look into bind)
    //and subtly adjusts the backgroundColor of the page
    //I added a multiplier so that certain words can cause a more significant shift
    colorFiddle(mult) {
        //randomly choose red, green, or blue for the rgb, and assign that color name to a variable
        //so that we can use it to change state later
        const colors = ["red", "green", "blue"]
        let changeColor = colors[Math.floor(Math.random() * colors.length)]
        //get the current value of the randomly selected color from state
        let ccVal = this.state[changeColor]

        //flip a coin, if heads, add a random 1-5 to the value,
        //tails, subtract the same
        //also, there is some bounds checking to prevent values greater than 255 and less than 0
        switch (Math.floor(Math.random() * 2)){
            case 0:
                if (ccVal >= 240) {
                    ccVal = ccVal / 2
                }
                ccVal += Math.floor(Math.random() * 5 * mult)
                break;
            case 1:
                if (ccVal <= 10) {
                    ccVal = ccVal * mult
                }
                ccVal -= Math.floor(Math.random() * 5 * mult)
                break;
            default:
                break;
        }
        //update the selected value in state
        this.setState({
            [changeColor]: ccVal
        })
    }

    decIndex(e, word) {
        if (word === "LATITUDE"){
            this.colorFiddle(10)
        }else {
            this.colorFiddle(1)
        }
        if (this.state.currentIndex > 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        } else {
            this.setState({
                currentIndex: this.state.itemArray.length - 1
            })
        }

    }

    incIndex(e, word) {
        if (word === "LATITUDE"){
            this.colorFiddle(10)
        }else {
            this.colorFiddle(1)
        }
        if (this.state.currentIndex < this.state.itemArray.length - 1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        } else {
            this.setState({
                currentIndex: 0
            })
        }

    }



    render() {

        let item = this.state.itemArray[this.state.currentIndex]
        //let item = itemList[this.state.currentIndex].word
        return(
            <header className="App-header" style={{backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}>
            <div className="list-wrapper">

                <h1 style={{color: `${item.color}`}}>{item.word}</h1>
                <div className="nav-row">
                    <Button variant="outline-primary" type="button" onClick={(e) => this.decIndex(e, item.word)}>Left</Button>
                    <Button variant="outline-primary" type="button" onClick={(e) => this.incIndex(e, item.word)}>Right</Button>

                </div>
            </div>
            </header>
        )


    }
}

export default List;