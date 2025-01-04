import React, { useEffect, useState } from 'react'
import Card from './Card';


const Pokemon = () => {
    const [Pokemon, setPokemon] = useState([])
    const [search, setsearch] = useState("")
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    const API = "https://pokeapi.co/api/v2/pokemon?limit=170";

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {

            let response = await fetch(API);
            let data = await response.json()
            let pokemonUrls = data.results

            const detailedRes = pokemonUrls.map(async (current) => {
                let newUrls = current.url;
                let newResponse = await fetch(newUrls);
                let newData = await newResponse.json();
                return newData;
            })

            const detailedData = await Promise.all(detailedRes)
            setPokemon(detailedData)
            setloading(false)
            
        } catch (error) {
            
            setloading(false)
            seterror(error.message)

        }

    }
    const searchedPokemon = Pokemon.filter((pok)=>
        pok.name.toLowerCase().includes(search.toLowerCase())
    )

    if (loading) {
        return (
            <main className="flex">
                <div className="loader"></div>
                <span>loading...</span>
            </main>
        )
    }

    
    if (error) {
        return (
            <main className="error-page flex
            ">
             <img src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg" alt="image" />
                <span>{error}</span>
            </main>
        )
    }


        

    return (
        <>
            <main className="flex">
                <h1 className="">Let's Catch Pokemon</h1>

                <input type="text" placeholder='Search Pokemon' value={search} onChange={(e) => { setsearch(e.target.value) }} />

                <div className="cardContainer flex">

                    {searchedPokemon.map((curPokemon) => {
                        return (
                            <Card pokemonData={curPokemon} key={curPokemon.id} />

                        )
                    })
                    }


                </div>
            </main>
        </>
    )
}

export default Pokemon
