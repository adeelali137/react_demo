import React, {useEffect, useState} from 'react'

export default function CoinsDisplay() {

    const [product, setproduct] = useState([])
    const [searchword, setsearchword] = useState('')
    

    useEffect(() => {
        const fetchapi = async () => {
            const result = await fetch('https://api.coinstats.app/public/v1/coins?skip=0')
            const response = await result.json()
            setproduct(response.coins)
        }
        fetchapi()
    }, [])

    const filtercoin = product.filter((coin)=> {
        return coin.symbol.toLowerCase().includes(searchword.toLowerCase())
    })

  return (
    <>
     <div className="header-coins">
        <h3>Search Coins</h3>
        <input
        type="text" 
        placeholder="Bitcoin..."
        onChange={(event) => {
            setsearchword(event.target.value);
          }}
        />
      </div>

       <div>
           {filtercoin.map((coin)=> { return (
               <>
               <img src={coin.icon} alt="" />
               <h1>{coin.name}</h1> 
               <h3>{coin.symbol}</h3>
               <p>{coin.price}</p> <br /><br />
               </>
           ) })}
       </div>
    </>
  )
}
