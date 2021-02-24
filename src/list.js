import React from 'react'

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
                    <button onClick={(e) => this.decIndex(e)}>Left</button>
                    <button onClick={(e) => this.incIndex(e)}>Right</button>

                </div>
            </div>
        )


    }
}

export default List;