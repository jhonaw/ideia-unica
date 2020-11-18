import React from 'react';
import Layout from '../comps/Layout';
import CapsLock from '../comps/CapsLock';

import styles from '../about.module.css';

const About = () => {
    return (
        <Layout> 
            <CapsLock>
                <h1 className={styles.about}>About</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro maiores doloribus dicta et exercitationem illo sequi consectetur velit, eius cumque veniam sapiente consequuntur explicabo facilis, suscipit perspiciatis ipsa dolorem?</p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro maiores doloribus dicta et exercitationem illo sequi consectetur velit, eius cumque veniam sapiente consequuntur explicabo facilis, suscipit perspiciatis ipsa dolorem?
                </p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro maiores doloribus dicta et exercitationem illo sequi consectetur velit, eius cumque veniam sapiente consequuntur explicabo facilis, suscipit perspiciatis ipsa dolorem?
            </CapsLock>
        </Layout>
    )
};

export default About;