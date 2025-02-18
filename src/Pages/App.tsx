import { Navbar } from '../Components';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';

export const App = () => {
    return (
        <>
            <Navbar />
            <AboutMe />
            <br />
            <Projects />
        </>
    )
}
