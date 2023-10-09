import './Home.css'

const Home = () => {
  return (

    <div>
    <header>
    <nav>
        <div className="container">
            <h1>Digital Pathshala</h1>
            <ul>
                <li><a href="/">Home</a></li>
                
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>

<section className="hero">
    <div className="container">
        <h2>Welcome to Digital Pathshala</h2>
        <p>Your pathway to digital learning excellence.</p>
        <a href="#" className="cta-button">Get Started</a>
    </div>
</section>

<section className="features">
    <div className="container">
        <div className="feature">
            <h3>Expert Instructors</h3>
            <p>Learn from industry experts and experienced instructors.</p>
        </div>
        <div className="feature">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
        </div>
        <div className="feature">
            <h3>Wide Range of Courses</h3>
            <p>Explore a variety of courses on digital subjects.</p>
        </div>
    </div>
</section>

<footer>
    <div className="container">
        <p>&copy; 2023 Digital Pathshala. All rights reserved.</p>
    </div>
</footer>
</div>

  )
}

export default Home
