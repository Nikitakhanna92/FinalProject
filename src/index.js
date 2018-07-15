import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { MainApp }from './MainApp'
import MobxDevTools from 'mobx-react-devtools'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <div>
   <MobxDevTools/>
    <MainApp />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
