import React from 'react';

const api = "http://localhost:5000";

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            state: props.state
        }
    }

    /*
        declare a member variable to hold the interval ID
        that we can reference later.
      */
     intervalID;

    componentDidMount() {
        this.getData();
        // update value every 5s
        this.intervalID = setInterval(this.getData.bind(this), 2000);
    }

    getData = () => {
        fetch(`${api}/get/${this.state.id}`)
            .then(response => response.json())
            .then(light => this.setState({state: light.state}));
    }

    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component
        */
        clearInterval(this.intervalID);
      }

    changeState = () => {
        fetch(`${api}/switch`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id
            })
        });
        // let a = this.state.state;
        // this.setState({state: !a});
    };

    render() {
        const {name, state} = this.state;
        if (state) {
            return (
    
                <div className='tc bg-light-green dib br3 pa3 na3 grow bw2 shadow-5 ba' style={{margin: "10px"}} onClick={this.changeState}>
                    <img alt='light bulk pics' src={"https://clipartion.com/wp-content/uploads/2015/11/free-to-use-amp-public-domain-light-bulb-clip-art-page-22.png"} width="200" height="200"/>
                    <div>
                        <h2>{name}</h2>
                    </div>
                </div>
            );
        } else {
            return (
    
                <div className='tc dib br3 pa3 na3 grow bw2 shadow-5 ba' style={{margin: "10px"}} onClick={this.changeState}>
                    <img alt='light bulk pics' src={"https://www.freeiconspng.com/uploads/bulb-off-icon-1.png"} width="200" height="200"/>
                    <div>
                        <h2>{name}</h2>
                    </div>
                </div>
            );
        }
    }
}

export default Card;