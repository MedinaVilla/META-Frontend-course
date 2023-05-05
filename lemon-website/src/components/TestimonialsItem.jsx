import React from 'react';
import styles from "./../styles/TestimonialsItem.module.css"

const TestimonialsItem = ({testimonial}) => {
    return (
        <article className={styles.card}>
        <div>
            <img className={styles.preview} src={testimonial.image} alt={"testimonial"} />
        </div>
        <div className={styles.info}>
            <h3>{testimonial.name}</h3>
        </div>
        <div className={styles.footer}>
            <p>{testimonial.comment}</p>
        </div>
    </article>
    );
};

export default TestimonialsItem;