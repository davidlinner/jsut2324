import './MyComponent.css'
import {useState} from 'react'

function MyComponent(props){

    return <div className="my-content">
      hello {props.subject}, 
      this is {props.b}
    </div>
  }

  export default MyComponent;