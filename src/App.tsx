import { Hero } from './components/Hero';
import { TextSection } from './components/TextSection';
import { VideoSection } from './components/VideoSection';
import demoVideo from './assets/demo-vid.mp4';

export default function App() {
    return (
        <>
            <Hero
                leftTitle={'Nasa Space\nApps Challenge'}
                centerTitleLines={['Beyond', 'The', 'Window']}
                rightTitle={'Space\nSimulation'}
                location="Tbilisi, Georgia"
                date="October 4–5, 2025"
                ctaText="ENTER THE SIMULATION"
                onRegister={() => alert('Registration coming soon!')}
            />

            <TextSection
                paragraphs={[
                    'We are a team of students and young professionals from Georgia, bringing together expertise in software engineering, data science, gameplay programming, and 3D modeling. United by a shared passion for technology, storytelling, and space exploration, we set out to recreate two of the International Space Station’s most extraordinary experiences: observing Earth through the Cupola - known as “the window to the world” - and training for spacewalks in the Neutral Buoyancy Laboratory at NASA’s Sonny Carter Training Facility in Houston.',
                    'Astronauts witness breathtaking views of our planet and undergo rigorous underwater training to prepare for the challenges of weightlessness. Through NASA Space Apps we aim to merge science with creativity by transforming these unique astronaut perspectives into an engaging, immersive simulation. Our project not only highlights the sensory wonder of sight and weightlessness, but also demonstrates how these extraordinary experiences contribute valuable knowledge and benefits to life on Earth. Watch the trailer and step into the simulation to experience it for yourself!'
                ]}
                ctaText="ENTER THE SIMULATION ↗"
                onCta={() => alert('Registration coming soon!')}
            />

            <VideoSection
                title="Before You Begin"
                caption="16:9 • HD"
                videoSrc={demoVideo}
            />
        </>
    );
}
