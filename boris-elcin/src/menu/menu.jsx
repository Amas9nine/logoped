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
        <Card img="./home2.jpg"
          p={'Продаю 15km дом  в Бишкеке'}
          price={25000}
        />
        <Card img="./hom3.jpg"
          p={'Продаю 2km дом  в Бишкеке'}
          price={2000}
        />
        <Card img="./home4.jfif"
          p={'Продаю 20km дом  в Бишкеке'}
          price={4500}
        />
        <Card img="./home5.jfif"
          p={'Продаю 8km дом  в Бишкеке'}
          price={7400}
        />
        <Card img="./home6.jfif"
          p={'Продаю 12km дом  в Бишкеке'}
          price={24000}
        />
        <Card img="./home7.jfif"
          p={'Продаю 7km дом  в Бишкеке'}
          price={6000}
        />
        <Card img="./home8.jpg"
          p={'Продаю 12km дом  в Бишкеке'}
          price={12000}
        />
      </div>


    </menu>
  )
}

export default Menu