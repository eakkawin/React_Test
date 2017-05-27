import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {HashRouter,Route,Link,IndexRoute} from 'react-router-dom';
import Main from './Main'
import ReduxForm from './ReduxForm'
import About from './About'
import store from '../store/store'
import '../../sass/style.sass'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
           <Main>
             <Route exact path='/' component={ReduxForm}/>
             <Route path="/about" component={About} />
           </Main>
        </HashRouter >
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
