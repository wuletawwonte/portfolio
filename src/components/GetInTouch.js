import React from 'react'

export default function GetInTouch() {
  return (
    <section id="three">
        <h2>Get In Touch</h2>
        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
        <div className="row">
            <div className="col-8 col-12-small">
                <form method="post" action="#">
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                    </div>
                </form>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>
            </div>
            <div className="col-4 col-12-small">
                <ul className="labeled-icons">
                    <li>
                        <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                        1234 Somewhere Rd.<br />
                        Nashville, TN 00000<br />
                        United States
                    </li>
                    <li>
                        <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                        000-000-0000
                    </li>
                    <li>
                        <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                        <a href="#">hello@untitled.tld</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

  )
}
