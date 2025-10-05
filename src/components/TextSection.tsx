import styles from './TextSection.module.css';

type Subsection = {
    subtitle: string;
    text: string[];
};

type TextSectionProps = {
    pretitle?: string;
    title?: string;
    subsections?: Subsection[];
    ctaText?: string;
    onCta?: () => void;
};

export function TextSection({
                                pretitle,
                                title,
                                subsections = [],
                                ctaText,
                                onCta,
                            }: TextSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {pretitle && <h3 className={styles.pretitle}>{pretitle}</h3>}
                {title && <h2 className={styles.title}>{title}</h2>}

                {subsections.map((s) => (
                    <div key={s.subtitle} className={styles.subsection}>
                        <h4 className={styles.subtitle}>{s.subtitle}</h4>
                        {s.text.map((t, i) => (
                            <p key={i} className={styles.paragraph}>{t}</p>
                        ))}
                    </div>
                ))}

                {ctaText && (
                    <div className={styles.ctaRow}>
                        <button
                            className={styles.cta}
                            onClick={onCta}
                            type="button"
                            aria-label={ctaText}
                        >
                            {ctaText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
