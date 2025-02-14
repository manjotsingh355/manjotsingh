import './Logo.css'


function Logo(props){

    return (
        <div className='logo'>
            <a href={props.href}>
                <img className='logoImg' src={props.logo}/>
            </a>
        </div>
    );
}

export default Logo;