import React, {useState, useEffect} from 'react';

const api = "http://localhost:5000";

function Card(props) {

    const {id, name, area} = props;
    const [state, setSta] = useState(props.state);

    useEffect(() => {
        // fetch(`${api}/get/${id}`)
        //     .then(response => response.json())
        //     .then(light => setSta(light.state));
    }, [state]);

    const changeState = () => {
        fetch(`${api}/switch`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id
            })
        }).then(setSta(!state));
    };

    if (state) {
        return (

            <div className='tc bg-light-green dib br3 pa3 na3 grow bw2 shadow-5 ba' style={{margin: "10px"}} onClick={changeState}>
                <img alt='light bulk pics' src={"https://clipartion.com/wp-content/uploads/2015/11/free-to-use-amp-public-domain-light-bulb-clip-art-page-22.png"} width="200" height="200"/>
                <div>
                    <h2>{name}</h2>
                    <h2>{`inside ${area} area`}</h2>
                </div>
            </div>
        );
    } else {
        return (

            <div className='tc dib br3 pa3 na3 grow bw2 shadow-5 ba' style={{margin: "10px"}} onClick={changeState}>
                <img alt='light bulk pics' src={"https://www.freeiconspng.com/uploads/bulb-off-icon-1.png"} width="200" height="200"/>
                <div>
                    <h2>{name}</h2>
                    <h2>{`inside ${area} area`}</h2>
                </div>
            </div>
        );
    }
}

export default Card;