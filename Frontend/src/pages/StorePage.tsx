import { useContext, useState } from 'react'
import PageHeader from '../components/PageHeader';

export interface IMissile {
  name: string;
  description: string;
  speed: number;
  intercepts: number;
  price: number;
};
export const StorePage = (stores: IMissile) => {
  const [missile, setMissile] = useState<IMissile[]>([])

  const buyMissile = (name: string) => {
    setMissile((missiles) => {
      return missiles.filter((missile) => missile.name !== name)
    })
  }

  return (
    <>
      <PageHeader title="Misslies pages" subtitle="welcome to Misslies pages" />
      <br />
      <div className='card-list'>
        {missile!.map((store) => (
          <div key={store.name} className='card'>
            <h2>Name: {store.name}</h2>
            <p>Description:{store.description}</p>
            <p>Speed:{store.speed}</p>
            <p>Intercepts{store.intercepts}</p>
            <p>Price:{store.price}</p>
            <button onClick={() => { buyMissile }}>Buy Missile</button>
          </div>
        ))}
      </div>
    </>
  )
}