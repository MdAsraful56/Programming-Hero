import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({featuer}) => {
    return (
        <div>
            <ul className="">
                <FaCheckCircle  className='bg-green-500 mr-2'/>
                <li className='text-white'>{featuer}</li>
            </ul>
        </div>
    );
};

Feature.propTypes = {
    featuer: PropTypes.string
};

export default Feature;