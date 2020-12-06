import './AboutUs.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import one from '../res/about/about-1.jpg';
import two from '../res/about/about-2.jpg';
import three from '../res/about/about-3.jpg';
import four from '../res/about/about-4.jpg';



function AboutUs(props) {
    return (
        <div class='aboutUs'>
            <div class='aboutUs_title'>About Us</div>
            <div class='aboutUs_Gallery'>
                <AwesomeSlider >
                    <div data-src={one} />
                    <div data-src={two} />
                    <div data-src={three} />
                </AwesomeSlider>
            </div>
            <div class='aboutUs_text'>
                <h2>WHAT YOU NEED TO KNOW</h2>
                <p>
                Das LabAix macht moderne Fertigungsverfahren wie 3D-Drucker, 
                Laser-Cutter oder CNC Fräsen zugänglich für alle, 
                und das rund um die Uhr. Besonders am Herzen liegt uns 
                dabei Nachhaltigkeit und Ressourcen Schonung.
                </p>
                <p>
                Mit über 800qm Bürofläche, Coworking-und Seminarräumen ist 
                das LabAix das perfekte Zuhause für Dein Startup! Wir bieten 
                eine professionelle Infrastruktur mit flexiblen Büros für 
                1-10 Personen, die Deinen Ideen Platz zum Wachsen bieten.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;