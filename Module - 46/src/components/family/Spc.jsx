import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Spc = ({ asset }) => {
    

    const gift = useContext(AssetContext);

    return (
        <div>
            <h4>Love - N</h4>
            <h3>{asset}</h3>
            <h6>{gift}</h6>
        </div>
    );
};

export default Spc;