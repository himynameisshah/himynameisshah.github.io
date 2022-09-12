import { useState } from 'react';
import recoil from './Recoil.png'
import fishie from './FishieProtecc.png'
import outofreach from './Out of Reach.png'
import shipwreck from './Shipwreck.png'
import saleswhale from './saleswhale.png'

function Card (props)
{
    const [hover, setHover] = useState(false);
    function handleHover(e)
    {
        setHover(true);
    }

    function handleLeave(e)
    {
        setHover(false);
    }

    function handleClick()
    {
        window.open(props.link); 
    }

    function renderImages() {
        if (!hover)
        {
            if (props.title == "Recoil")
                return <img src={recoil} alt="Recoil" />
            else if (props.title == "FishieProtecc")
                return <img src={fishie} alt="FishieProtecc" />
            else if (props.title == "Out of Reach")
                return <img src={outofreach} alt="Out of Reach" />
            else if (props.title == "FishieProtecc")
                return <img src={fishie} alt="FishieProtecc" />
            else if (props.title == "Shipwreck Crewmates")
                return <img src={shipwreck} alt="Shipwreck Crewmates" />
            else if (props.title == "SalesWhale Clone")
                return <img src={saleswhale} alt="SalesWhale Clone" />
        }
    }

    return (
        <div className="card" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
            {renderImages()}
            <div className="cardInfo">
                { hover && <h1>{props.title}</h1> }
                { hover && <h3>{props.subtitle}</h3> }
                { hover && <p>{props.description}</p> }
                { hover && <h5>Tools: {props.tools}</h5> }
            </div>

        </div>
    )
}

export default Card