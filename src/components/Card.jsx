
import star from "/assets/star.png"

import './card.css'

export default function Card(props) {
    props
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`/assets/${props.coverImg}`} alt="Katie Zaferes" />
            <div className="card--stats">
                <img className="star-img" src={star} alt="star" />
                <span className="rank">{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>Russia</span>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}