import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin";
import { getCryptoList } from "../../services/CrypotApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";


function HomePeag() {
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading]= useState(true);
  const [peage, setPeage]= useState(1);
  const [currency , setCurrency] = useState("usd");
  const [chart ,setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCryptoList(peage, currency));
      const json = await res.json();
      setCoins(json);
      } catch (error) {
        console.log(error);
      }
      
      
      
      
      setIsLoading(false)
    }
    getData();
  }, [peage, currency])
  return (
    
    <div>
      <Search  currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading ={isLoading}  setChart={setChart}/>
      <Pagination  peage={peage} setPeage={setPeage}/>
      {!!chart &&<Chart chart={chart} setChart={setChart} />}
    </div>
  )
}

export default HomePeag