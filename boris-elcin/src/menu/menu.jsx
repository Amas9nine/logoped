import React from 'react'
import Card from './card'
import './menu.css'


function Menu(props) {



  // const deleteTodo = (id) => {
  //   const newArr = state.filter((item) => {
  //     return item.id !== id
  //   })
  //   setState(newArr)
  // }
  return (
    <menu >

      <div className='last_Adt'>
        <h1>Последние объявления</h1>
      </div>

      <div className='square'>
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}

        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
        <Card img="./card_home.png"
          p={'Продаю 10km дом  в Бишкеке'}
          price={5000}
        />
      </div>


    </menu>
  )
}

export default Menu