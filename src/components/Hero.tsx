import styles from './Hero.module.css';
import heroImg from '../assets/iss-hero.png';

type HeroProps = {
    leftTitle?: string;
    centerTitleLines?: [string, string, string];
    rightTitle?: string;
    location?: string;
    date?: string;
    ctaText?: string;
    onRegister?: () => void;
};

export function Hero({
                         leftTitle = 'Nasa Space\nApps Challenge',
                         centerTitleLines = ['Beyond', 'The', 'Window'],
                         rightTitle = 'Space\nSimulation',
                         location = 'Tbilisi, Georgia',
                         date = 'October 4–5, 2025',
                         ctaText = 'REGISTER',
                         onRegister,
                     }: HeroProps) {
    return (
        <section className={styles.hero} aria-label="Hero">
            <img className={styles.bg} src={heroImg} alt="International Space Station over Earth" />
            <div className={styles.overlay} />

            <div className={styles.topBar}>
                <div className={styles.topLeft}>
                    {leftTitle.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                </div>

                <div className={styles.centerTitle}>
                    {centerTitleLines.map((line, i) => <div key={i}>{line}</div>)}
                </div>

                <div className={styles.topRight}>
                    {rightTitle.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.infoCard} role="group" aria-label="Event details">
                    <div className={styles.infoGrid}>
                        <div className={styles.label}>Location:</div>
                        <div className={styles.label}>Date</div>
                        <div className={styles.value}>{location}</div>
                        <div className={styles.value}>{date}</div>
                    </div>
                </div>

                <button
                    className={styles.cta}
                    onClick={onRegister}
                    type="button"
                    aria-label={ctaText}
                >
                    {ctaText}
                </button>
            </div>
        </section>
    );
}
