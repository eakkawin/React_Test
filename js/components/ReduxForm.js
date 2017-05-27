import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
import ApiCall from '../actions/ApiCall'
class ReduxForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : []
    }
  }
  handleSubmit(form) {
    var oldData = this.state.data
    if(oldData!==[]){
      var newData = oldData.concat(JSON.stringify(form))
      this.setState({
        data: newData
      })
    }else{
      var newData = oldData.push(JSON.stringify(form))
      this.setState({
        data: newData
      })
    }
  }
  handleClear(){
    this.setState({
      data: []
    })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <Form className='form' model="user"
            onSubmit={(form) => this.handleSubmit(form)}>
            <div className='form_box'>
              <div className='header'>
                Register Form
              </div>
              <div className='field'>
                <label>Email:</label>
                <Control type="email" model=".email" placeholder="email@example.com" required validateOn="blur"/>
                <Errors className="errors" model=".email" show="touched"
                messages={{
                  valueMissing: 'Email is required',
                  typeMismatch: 'Invalid email address',
                }}
                />
              </div>
              <div className='field'>
                <label>First name:</label>
                <Control.text model=".firstName" placeholder='Firstname' required validateOn="blur"/>
                <Errors
                  className="errors"
                  model=".firstName"
                  show="touched"
                  messages={{
                    valueMissing: 'Firstname is required',
                  }}
                />
              </div>
              <div className='field'>
                <label>Last name:</label>
                <Control.text model=".lastName" placeholder='Lastname' required validateOn="blur"/>
                <Errors
                  className="errors"
                  model=".lastName"
                  show="touched"
                  messages={{
                    valueMissing: 'Lastname is required',
                  }}
                  />
              </div>
              <button type="submit" className='submit'>
                Submit Form
              </button>
              <Control.reset model="user" className="clear">
                Clear Form
              </Control.reset>
              <button type="button" className="clear" onClick={()=>this.handleClear()}>
                Clear Values
              </button>
              <hr/>
            </div>
          </Form>
          <div className='callapi'>
            <ApiCall/>
          </div>

        </div>
        <div className='value'>
          <div className='header'>
          Values
          </div>
          {this.state.data}
        </div>
      </div>
    );
  }
}
export default ReduxForm;
