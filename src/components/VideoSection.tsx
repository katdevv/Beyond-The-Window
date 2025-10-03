import styles from './VideoSection.module.css';

type VideoSectionProps = {
    title?: string;
    caption?: string;
    iframeSrc?: string;
    videoSrc?: string;
    poster?: string;
};

export function VideoSection({
                                 title = 'Watch the trailer',
                                 caption = '16:9 • HD',
                                 iframeSrc,
                                 videoSrc,
                                 poster,
                             }: VideoSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="video-section-title">
            <div className={styles.inner}>
                {(title || caption) && (
                    <div className={styles.header}>
                        {title ? <h3 id="video-section-title" className={styles.title}>{title}</h3> : <div />}
                        {caption ? <div className={styles.caption}>{caption}</div> : null}
                    </div>
                )}

                <div className={styles.player}>
                    {iframeSrc ? (
                        <iframe
                            src={iframeSrc}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            title={title || 'Video'}
                        />
                    ) : videoSrc ? (
                        <video controls poster={poster}>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
