import React from 'react'

export default function RecentWorks() {
  return (
    <section id="two">
        <h2>Recent Work</h2>
        <div className="row">
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/covidtracker.jpeg" className="image fit thumb"><img src="images/thumbs/covidtracker.jpg" alt="project snapshot" /></a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/webdevcourse.jpg" className="image fit thumb"><img src="images/thumbs/webdevcourse.jpg" alt="project snapshot" /></a>
                <h3>Ultricies lacinia interdum</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/vehiclereservation.jpg" className="image fit thumb"><img src="images/thumbs/vehiclereservation.jpg" alt="project snapshot" /></a>
                <h3>Tortor metus commodo</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/amudsr.jpg" className="image fit thumb"><img src="images/thumbs/amudsr.jpg" alt="project snapshot" /></a>
                <h3>Quam neque phasellus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/expensetracker.jpg" className="image fit thumb"><img src="images/thumbs/expensetracker.jpg" alt="project snapshot" /></a>
                <h3>Nunc enim commodo aliquet</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/bookstore.jpg" className="image fit thumb"><img src="images/thumbs/bookstore.jpg" alt="project snapshot" /></a>
                <h3>Risus ornare lacinia</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
        </div>
        <ul className="actions">
            <li><a href="#" className="button">Full Portfolio</a></li>
        </ul>
    </section>

  )
}
