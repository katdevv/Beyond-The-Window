import { Hero } from './components/Hero';
import { TextSection } from './components/TextSection';
import { VideoSection } from './components/VideoSection';
import { TeamSection } from './components/TeamSection';
import demoVideo from './assets/nasa.mp4';

const TEAM = [
    { name: 'Shota Khakhishvili', role: 'Gameplay Developer' },
    { name: 'Gigi Chachua', role: 'Game Developer' },
    { name: 'Tornike Todria', role: '3D Developer' },
    { name: 'Ekaterine Sheshelidze', role: 'Software Engineer' },
    { name: 'Nia Nozadze', role: 'Data Scientist' },
];

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
                pretitle="2025 NASA Space Apps Challenge"
                title="Beyond The Window"
                subsections={[
                    {
                        subtitle: "Challenge | International Space Station 25th Anniversary Apps",
                        text: [
                            "Crews onboard the International Space Station experience some of humanity’s most extraordinary moments! They witness breathtaking views of Earth from the station’s Cupola - known as “the window to the world.” They also experience weightlessness and go outside the station on spacewalks, for which they must train extensively in the Neutral Buoyancy Laboratory (NBL) at the Sonny Carter Training Facility in Houston, Texas.",
                            "Yet for most people, these experiences remain distant and unseen. The intensity of astronaut training, the precision of spacewalks, and the scientific value of Earth observation are rarely understood beyond images. Our team, Beyond the Window, aims to change that by making these moments accessible, educational, and inspiring to everyone - turning astronaut perspectives into a bridge between space exploration and life on Earth."
                        ],
                    },
                    {
                        subtitle: "Solution",
                        text: [
                            "United by a shared passion for technology, storytelling, and space exploration, we set out to recreate three defining aspects of an astronaut’s journey: underwater training at the Neutral Buoyancy Laboratory, observation and data collection through the Cupola, and the spacewalk outside the station.",
                            "Our project combines NASA’s open data, imagery, and authentic astronaut training concepts into a single interactive, authentic simulation. It allows millions of students, educators, space enthusiasts, and the public to experience the wonder of sight and weightlessness while understanding their real-world impact on science, innovation, and human progress.",
                            "Through NASA Space Apps, we merge science with creativity - transforming astronaut experiences into tools for learning, curiosity, and inspiration. Watch the trailer and step into the simulation to experience it yourself!"
                        ],
                    },
                ]}
                ctaText="ENTER THE SIMULATION ↗"
                onCta={() => alert('Registration coming soon!')}
            />

            <VideoSection
                title="Before You Begin"
                caption="16:9 • HD"
                videoSrc={demoVideo}
            />

            <TeamSection members={TEAM} />
        </>
    );
}
