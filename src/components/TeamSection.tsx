import styles from './TeamSection.module.css';

export type TeamMember = {
    name: string;
    role: string;
};

type TeamSectionProps = {
    title?: string;
    members: TeamMember[];
};

export function TeamSection({
                                title = 'Team Members',
                                members,
                            }: TeamSectionProps) {
    const sorted = [...members].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );

    return (
        <section className={styles.section} aria-labelledby="team-title">
            <div className={styles.inner}>
                <h2 id="team-title" className={styles.title}>{title}</h2>

                <ul className={styles.grid}>
                    {sorted.map((m) => (
                        <li key={m.name} className={styles.card}>
                            <div className={styles.name}>{m.name}</div>
                            <div className={styles.role}>{m.role}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
