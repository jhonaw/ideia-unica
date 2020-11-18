import React from 'react';
import Layout from '../comps/Layout';

import styles from '../about.module.css';

const About = () => {
    return (
        <Layout>
            <h1 className={styles.about}>About</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro maiores doloribus dicta et exercitationem illo sequi consectetur velit, eius cumque veniam sapiente consequuntur explicabo facilis, suscipit perspiciatis ipsa dolorem?</p>
        </Layout>
    )
};

export default About;