
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

const About = () => {
  return (
    <div>
     <Navbar />
     <Button title="Register" />

    <section className="about">
        <div className="container">
            <h2>About Us</h2>
            <p>Welcome to Digital Pathshala, your trusted source for digital education.</p>
            <p>We are committed to providing high-quality online courses and resources to help you enhance your digital skills and knowledge. Whether you are a beginner looking to get started or a professional aiming to stay updated in the ever-changing digital landscape, we have something for you.</p>
            <p>Our team of experienced instructors and experts is dedicated to delivering engaging and informative content that empowers you to succeed in your digital journey.</p>
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

export default About
