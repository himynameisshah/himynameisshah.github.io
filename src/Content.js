import Card from './Card.js'
import data from "./data.json"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Content() {
    let loc = useLocation();

    function RenderCard(card) {
            if (loc.pathname === "/Projects") {
                return <Card
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                tools={card.tools}
                type={card.type}
                link={card.link}>
              </Card>;
            }
            else if  (loc.pathname === "/GameDev") {
                if (card.type === "GameDev") {
                    return <Card
                    key={card.id}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    tools={card.tools}
                    type={card.type}
                    link={card.link}>
                  </Card>;
                }
            }
            else if  (loc.pathname === "/WebDev") {
                if (card.type === "WebDev") {
                    return <Card
                    key={card.id}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    tools={card.tools}
                    type={card.type}
                    link={card.link}>
                  </Card>;
                }
            }          
      }

    return (
        <article className="content">
            { data.map((card) => {
                return RenderCard(card);
                })}
        </article>
    )
}

export default Content

