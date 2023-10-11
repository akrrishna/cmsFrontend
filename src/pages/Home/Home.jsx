
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (

    <div>
    <Navbar />
    <Button title = "Login" color = "red"/>
    <Button title = "Register" color = "blue" />

    

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
