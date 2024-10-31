import Dad from "../Dad/Dad";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
import { createContext, useState } from "react";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

function Grandpa() {
  const [money, setMoney] = useState(1000)
 const asset = 'diamond';
  return (
    <div className="grandpa">
     <div>
      <h1>Grandpa</h1>
      <p>Net Money: {money}</p>
    <MoneyContext.Provider value={[money, setMoney]}>
    <AssetContext.Provider value="gold">
     <section className="flex">
     <Dad  asset={asset}/>
      <Uncle asset={asset} />
      <Aunty />
     </section>
    </AssetContext.Provider>
    </MoneyContext.Provider>
    </div>
    </div>
  );
}

export default Grandpa;
