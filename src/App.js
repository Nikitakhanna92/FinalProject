import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Div, P, Span } from 'glamorous'
import FA from 'react-fontawesome'


const store = observable({
  itemCount: 0,
  lastItem: null,
})

const handleBuyClick = name => () => {
  store.itemCount += 1
  store.lastItem = name
}

const handleClearCart = () => {
  store.itemCount = 0
  store.lastItem = null
}



const Cart = observer(() =>
  <Div fontSize='2rem' color='white'>
    <Span marginRight='0.5rem'>
      Shopping Cart
    </Span>
    <Span marginRight='0.5rem' userSelect='none'>
      {store.itemCount}
    </Span>
    <Span style={{ "font-size": "30px", "border": "black solid 1px", "background": "#ee82ee3d", "border-radius": "7px" }} onClick={handleClearCart} cursor='pointer'> Remove
      <FA name='trash-o' />

    </Span>
  </Div>
)

const Header = observer(props =>
  <Div display='flex' background='skyblue' padding='1rem'>
    <Div>{props.children}</Div>
    <Div flex='1' />
  </Div>
)

const LastBought = observer(() =>
<Div>{`Last bought item: ${store.lastItem || ''}`}</Div>

)


export const App = observer(props =>
     
     <div>
        <Header>
          <Cart />
        </Header>
        {props.items.data ? props.items.data.map(item => (<Div key={item}>
          <Div marginBottom='2rem' />
          <Div
            onClick={handleBuyClick(item)}
            cursor='pointer'
            userSelect='none'
          >
            <Span style={{ "font-size": "20px" }} marginRight='0.5rem'><FA name='plus' /> + </Span>
            <Span>Buy {item}  </Span>
          </Div>
          <Div marginBottom='2rem' />

        </Div>)
        ) : null}

        <LastBought />
      </div>
    );
  

