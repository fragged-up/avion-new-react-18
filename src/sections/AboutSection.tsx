import styles from '@/styles/css/AboutSc.module.css';
import imageSc from '@/assets/images/Image-sc.svg';
import srImage from '@/assets/images/sr-image.svg';

export default function AboutSection() {
  return (
    <>
      <div className={styles['about-wrapper']}>
        <div className={styles['about-c']}>
          <h1 className={styles['ab-h']}>
            A brand built on the love of craftmanship,
            <br /> quality and outstanding customer service
          </h1>

          <button className={styles['ab-button']}>View our products</button>
        </div>

        <div className={styles['main-sc']}>
          <div className={styles['bio-c']}>
            <div className={styles['bio']}>
              <h2 className={styles['bio-h']}>It started with a small idea</h2>

              <p className={styles['bio-p']}>
                A global brand with local beginnings, our story begain in a{' '}
                <br className={styles['line-down']} /> small studio in South London in early 2014
              </p>

              <button className={styles['bio-button']}>View Collection</button>
            </div>

            <div className={styles['block-c']}>
              <img src={imageSc} alt="" className={styles['sc-img']} />
            </div>
          </div>

          <div className={styles['semi-b-w']}>
            <div className={styles['semi-b-c']}>
              <div className={styles['sr-c']}>
                <img src={srImage} alt="" className={styles['sr-img']} />
              </div>

              <div className={styles['our-sr-c']}>
                <h4 className={styles['sr-h3']}>
                  Our service isn’t just personal, it’s actually hyper personally exquisite
                </h4>

                <small className={styles['sr-small']}>
                  When we started Avion, the idea was simple. Make high quality furniture affordable
                  and available for the mass market.
                  <br />
                  <br />
                  Handmade, and lovingly crafted furniture and homeware is what we live, breathe and
                  design so our Chelsea boutique become the hotbed for the London interior design
                  community.
                </small>

                <div className={styles['get-ccc']}>
                  <button className={styles['get-in-button']}>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
