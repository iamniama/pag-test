import React from 'react'
import Button from 'react-bootstrap/Button'

class List extends React.Component {
    constructor(props){
        super()
        this.state = {
            itemArray: props.items,
            currentIndex: 0
        }
    }

    decIndex(e){
        if (this.state.currentIndex > 0){
        this.setState({
            currentIndex: this.state.currentIndex - 1
        })
        }else{
            this.setState({
                currentIndex: this.state.itemArray.length - 1
            })
        }
    }

    incIndex(e){
        if (this.state.currentIndex < this.state.itemArray.length -1){
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
        }else {
            this.setState({
                currentIndex: 0
            })
        }
    }


    render() {
        let item = this.state.itemArray[this.state.currentIndex]
        //let item = itemList[this.state.currentIndex].word
        return(
            <div className="list-wrapper">

                <h1 className={item.color}>{item.word}</h1>
                <div className="nav-row">
                    <Button variant="outline-primary" onClick={(e) => this.decIndex(e)}>Left</Button>
                    <Button variant="outline-primary" onClick={(e) => this.incIndex(e)}>Right</Button>

                </div>
            </div>
        )


    }
}

export default List;