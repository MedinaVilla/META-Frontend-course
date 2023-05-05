import React from 'react';

import styles from "./../styles/Testimonials.module.css";
import TestimonialsItem from './TestimonialsItem';

const Testimonials = () => {

    const testimonials = [
        {
            name: 'Jose Madero',
            comment: 'This is my absolute favorite restaurant. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.',
            image: "https://media.gq.com.mx/photos/6272be691e7e8a4eaa1edcb6/1:1/w_1862,h_1862,c_limit/jose%20madero%20giallo.jpg"
        },
        {
            name: 'All Time Low',
            comment: 'This is my absolute favorite restaurant. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.',
            image: "https://cdns-images.dzcdn.net/images/artist/fdae7398aa8c6fdc23c1df6516faf1f9/500x500.jpg"
        },
        {
            name: 'Lasso',
            comment: 'This is my absolute favorite restaurant. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.',
            image: "https://ultimasnoticias.com.ve/wp-content/uploads/2023/02/Lasso-1-1.jpg"
        },
        {
            name: 'Remi',
            comment: 'This is my absolute favorite restaurant. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.',
            image: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/por-que-ratatouille-nos-sigue-enamorando-10-anos-despues/136444706-1-esl-ES/Por-que-Ratatouille-nos-sigue-enamorando-10-anos-despues.jpg?crop=0.5xw:1xh;center,top&resize=1200:*"
        }
    ]


    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Our Testimonials</h1>

            <div className={styles.box}>

                {
                    testimonials.map((t) => {
                        return <TestimonialsItem testimonial={t} />
                    })
                }
            </div>
        </section>
    );
};

export default Testimonials;