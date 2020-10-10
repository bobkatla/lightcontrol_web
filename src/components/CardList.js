import React from 'react';
import Card from './Card';

const CardList = ({lights}) => {
    // console.log(lights);

    return (
        <div>
            {
                lights.map(light => {
                    // console.log(light.id);
                    return(
                        <Card
                            key={light.id}
                            id = {light.id}
                            name={light.name} 
                            area={light.area}
                            state={light.state}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;