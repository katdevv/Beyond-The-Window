import styles from './TextSection.module.css';

type TextSectionProps = {
    pretitle?: string;
    title?: string;
    paragraphs: string[];
    ctaText?: string;
    onCta?: () => void;
};

export function TextSection({
                                pretitle = '2025 NASA Space Apps Challenge',
                                title = 'Beyond The Window',
                                paragraphs,
                                ctaText = 'REGISTER ↗',
                                onCta,
                            }: TextSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="text-section-title">
            <div className={styles.inner}>
                <div className={styles.pretitle}>{pretitle}</div>
                <h2 id="text-section-title" className={styles.title}>{title}</h2>

                <div className={styles.body}>
                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                <div className={styles.ctaRow}>
                    <button className={styles.cta} onClick={onCta} type="button">
                        {ctaText}
                    </button>
                </div>
            </div>
        </section>
    );
}
