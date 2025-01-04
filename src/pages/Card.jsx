import React from 'react'

const Card = ({pokemonData}) => {
  return (
    <div className='Card flex'>
        <figure className='flex'>
          <img src={pokemonData.sprites.front_default} alt="this is pic of pokemon character" />
        </figure>

        

        <span className='name'>{pokemonData.name}</span>
        <span className='living-place'>Grass,Water</span>

         <div className="propertise-box flex">
          <p className='flex'><span className='property-span'>Height :</span>{pokemonData.height}</p>
          <p  className='flex'><span className='property-span'>weight :</span>{pokemonData.weight}</p>
          <p className='flex'><span className='property-span'>speed :</span>{pokemonData.stats[5].base_stat}</p>
          <p className='flex'><span className='property-span'>Experience :</span>{pokemonData.base_experience}</p>
          <p className='flex'><span className='property-span'>Attack :</span>{pokemonData.stats[1].base_stat}</p>
          <p className='flex'><span className='property-span'>Abilities :</span>{pokemonData.abilities[0].ability.name}</p>
          
          
          </div> 
    </div>
  )
}

export default Card
