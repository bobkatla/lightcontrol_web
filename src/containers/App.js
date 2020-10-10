import React from 'react';
// import {robots} from './robots'
import CardList from '../components/CardList';
import './App.css';

const api = "http://localhost:5000";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lights: []
        }
    }

    componentDidMount() {
        fetch(`${api}/getall`)
            .then(response => response.json())
            .then(lights => this.setState({lights}));
    }

    render() {
        // using destruct to clean the code
        const {lights} = this.state;
        // console.log(lights);

        return !lights.length
        ? <h1 className='tc'>Loading</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>Test Light</h1>
                <CardList lights={lights}/>
            </div>
        );
    }
}

export default App;