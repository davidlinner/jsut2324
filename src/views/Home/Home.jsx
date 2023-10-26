import {useLocation} from 'wouter'; 

function Home(){
    const [location, setLocation] =
     useLocation();

    function handleClick(){
        // here we want to navigate to view1
        setLocation('/sign-up');
    }

    return <>
        <h1>This my home view</h1>
        <button 
        onClick={handleClick}>
            Login
        </button>
    </>
}

export default Home;