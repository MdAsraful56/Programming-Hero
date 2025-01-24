import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./style.css";

export const AssetContext = createContext('01 Luck Taka');

const Grandpa = () => {

    const asset = 'Gold Ring';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="" >
                <section className="flex">
                    <Dad asset={asset} />
                    <Uncle />
                    <Aunty />
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;