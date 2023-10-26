import './NiceButton.css'

function NiceButton({children, variant, onClick}){
    const variantClass = variant === 'primary' ? 'button--primary' : 'button--secondary';
    
    return (
        <button onClick={onClick} className={`button ${variantClass}`}>
        {children}
        </button>
    );          
}

export default NiceButton;