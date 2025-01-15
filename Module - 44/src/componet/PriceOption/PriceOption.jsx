
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="border rounded-2xl bg-orange-500 text-white shadow-xl">
            <h1 className="text-4xl font-semibold text-center"><span>{price}</span>/Mon</h1>
            <h2 className="text-3xl font-semibold text-center">{name}</h2>
            {
                features.map((feature, idx) => <Feature key={idx} featuer={feature} ></Feature>)
            }
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;