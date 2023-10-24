import './MyComponent.css'

function MyComponent(props){
    return <div className="my-content">
      hello {props.subject}, 
      this is {props.b}
    </div>
  }

  export default MyComponent;