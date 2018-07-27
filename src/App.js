import React from 'react'
import { observable,autorun } from 'mobx'
import { observer } from 'mobx-react'
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

autorun(function() {
  console.log("",store.lastItem)
});

const Cart = observer(() =>
  <div style={{'fontSize':'2rem', 'color':'white'}}>
    <span  style={{'marginRight':'0.5rem'}}>
      Shopping Cart
    </span>
    <span style={{'marginRight':'0.5rem','userSelect':'none'}}>
      {store.itemCount}
    </span>
    <span style={{ "font-size": "30px", "border": "black solid 1px", "background": "#ee82ee3d", "border-radius": "7px" }} onClick={handleClearCart} cursor='pointer'> Remove
    </span>
  </div>
)

const Header = observer(props =>
  <div style={{'display':'flex', 'background':'skyblue', 'padding':'1rem'}}>
    <div>{props.children}</div>
    <div style = {{flex:'1'}}  />
  </div>
)

const LastBought = observer(() =>
<div>{`Last bought item: ${store.lastItem || ''}`}</div>

)


export const App = observer(props =>
     
     <div>
        <Header>
          <Cart />
        </Header>
        {props.items.data ? props.items.data.map(item => (<div key={item}>
          <div style={{'marginBottom':'2rem'}} />
          <div
            onClick={handleBuyClick(item)}
            cursor='pointer'
            userSelect='none'
          >
            <span style={{ "font-size": "20px","marginRight":"0.5rem" }} > + </span>
            <span>Buy {item}  </span>
          </div>
          <div style={{'marginBottom':'2rem'}} />

        </div>)
        ) : null}

        <LastBought />
      </div>
    );
  

