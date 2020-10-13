import React, {useEffect, useState} from 'react';
import CardList from '../components/CardList';
import './App.css';

const api = "http://localhost:5000";

function App() {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        fetch(`${api}/getall`)
            .then(response => response.json())
            .then(lights => setLights(lights));
    }, []);

    return !lights.length
    ? <h1 className='tc'>Loading</h1>
    : (
        <div className='tc'>
            <h1 className='f1'>Test Light</h1>
            <CardList lights={lights}/>
        </div>
    );
}

export default App;