import React from 'react';
import styles from '../css/guideContent.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={styles.guideContent}>
        <div className={styles.section}>
          <div className={styles.innerSections}>
            <ul className={styles.sectionItems}>
              <li className={`${styles.sectionItem} ${styles.itemActive}`}>Home</li>
              <li className={styles.sectionItem}>Explore</li>
              <li className={styles.sectionItem}>Subscriptions</li>
            </ul>
          </div>

          <div className={styles.innerSections}>
            <ul className={styles.sectionItems}>
              <li className={styles.sectionItem}>Libary</li>
              <li className={styles.sectionItem}>History</li>
            </ul>
          </div>

          <div className={styles.innerPromo}>
            <p>Sign in to like videos,</p>
            <p>comment, and subscribe.</p>

            <div className={styles.innerSign}>SIGN IN</div>
          </div>

          <footer>
            <div className={styles.footerPrimary}>
              <p>About Press Copyright</p>
              <p>Contact us Creators</p>
              <p>Advertise Developers</p>
            </div>

            <div className={styles.footerSecondary}>
              <p>Terms Privacy Policy & Safety</p>
              <p>How YouTube works</p>
              <p>Test new features</p>
            </div>

            <div className={styles.copyright}>
              <p>© 2022 Google LLC</p>
              <p>CEO: Sundar Pichai</p>
              <p>Address: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
              <p>Phone: 080-822-1450 (free)</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
