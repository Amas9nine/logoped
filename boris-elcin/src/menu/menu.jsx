import React from 'react'
import Card from './card'
import './menu.css'
import { useState } from 'react'


function Menu() {
  // 
  const card = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ]
  //
  const [state, setState] = useState(card)
  // 
  const deleteTodo = (id) => {
    const newArr = state.filter((item) => {
      return item.id !== id
    })
    setState(newArr)
  }
  //

  return (
    <menu onDelete={deleteTodo} >

      <div className='last_Adt'>
        <h1>Последние объявления</h1>
      </div>

      <div className='square'>
        <Card id='1' img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card id='2' img="./home2.jpg"
          p={'Продаю 15km дом  в Бишкеке'}
          price={25000}
        />
        <Card id='3' img="./hom3.jpg"
          p={'Продаю 2km дом  в Бишкеке'}
          price={2000}
        />
        <Card id='4' img="./home4.jfif"
          p={'Продаю 20km дом  в Бишкеке'}
          price={4500}
        />
        <Card id='5' img="./home5.jfif"
          p={'Продаю 8km дом  в Бишкеке'}
          price={7400}
        />
        <Card id='6' img="./home6.jfif"
          p={'Продаю 12km дом  в Бишкеке'}
          price={24000}
        />
        <Card id='7' img="./home7.jfif"
          p={'Продаю 7km дом  в Бишкеке'}
          price={6000}
        />
        <Card id='8' img="./home8.jpg"
          p={'Продаю 12km дом  в Бишкеке'}
          price={12000}
        />
      </div>


    </menu>
  )
}

export default Menu