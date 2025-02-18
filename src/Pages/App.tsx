import { Navbar } from '../Components';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const App = () => {
    return (
        <>
            <Navbar />
            <AboutMe />
            <br />
            <Projects />
            <br />
            <Contact />
        </>
    )
}
