import Card from './Card';
import data from '../data.js';

import "./cardsList.css";

export default function CardsList () {

    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="cards">
            {cards}
        </div>
    )

}