import photo from "/assets/photo-grid.png"

import './sectionMain.css'

export default function SectionMain () {
    return <section className="section-main">
        <img className="section-main--img" src={photo} alt={"People doing hobbies"}/>
        <h1 className="section-main--title" >Online Experiences</h1>
        <p className="section-main--text" >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
}