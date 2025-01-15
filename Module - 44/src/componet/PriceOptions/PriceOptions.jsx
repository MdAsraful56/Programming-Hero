import { useEffect } from 'react';
import { useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const [options, setOptions] = useState([]);

    useEffect( ()=> {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setOptions(data))
    } ,[])

    return (
        <div>
            <h2 className="text-2xl mt-10 text-center mb-10">Best Prices in the Town</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-14 mx-4">
                {
                    options.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }
            </div>
        </div>
    );
};


export default PriceOptions;