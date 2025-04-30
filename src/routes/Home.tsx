import { NavLink } from 'react-router-dom';
import { ProductListMobile } from '@/features/products/ProductListMobile';
import { OurPopularM } from '@/features/products/ProductListMobile';
import { ProductListDesktop } from '@/features/products/ProductListMobile';
import { CatalogAPI as CatalogDeskAPI } from '@/services/api/base';
import { OurPopAPI } from '@/services/api/base';
import { RasticImage, DandyImage, SilkyImage, SpaImage, DarkDandyImage, SofaImage, TransitIcon, CheckmarkIcon, PurchaseIcon, RecycleIcon, DandyChairImage, LucyLampImage} from '@/icons';
import styles from '@/styles/css/Content-m.module.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="bg-white">
      <div className={styles['wrapper-mobile']}>
        <div className={styles['container']}>
          <div className={styles['head-cont']}>
            <h1 className={styles['head-top']}>
              The furniture brand for the future, with timeless designs
            </h1>
          </div>

          <div className={styles['para-bt-cont']}>
            <p className={styles['para-top']}>
              A new era in eco friendly furniture with Avelon, the French luxury retail brand with
              nice fonts, tasteful colors and a beautiful way to display things digitally using
              modern web technologies.
            </p>

            <NavLink to="/products">
              <button className={styles['view-collection-button']}>View Collection</button>
            </NavLink>
          </div>
        </div>
           {/* Desktop */}
        <div className={styles['desk-w']}>
          <div className={styles['desk-c']}>
            <div className={styles['desk-hero']}>
              <div className={styles['desk-l-part']}>
                <h1 className={styles['desk-top']}>
                  The furniture brand for the
                  <br /> future, with timeless designs
                </h1>

                <NavLink to="/products">
                  <button className={styles['desk-view-collection-button']}>View Collection</button>
                </NavLink>
                <br />
                <br />
                <br />
                <p className={styles['desk-para-top']}>
                  A new era in eco friendly furniture with Avelon, the French luxury retail brand
                  with nice fonts, tasteful colors and a beautiful way to display things digitally
                  using modern web technologies.
                </p>
              </div>
              <div className={styles['desk-r-part']}></div>
            </div>
          </div>

          <div className={styles['desk-section-w']}>
            <div className={styles['desk-content-1']}>
              <div className={styles['desk-head-block-1-container']}>
                <h1 className={styles['desk-head-block-1']}>What makes our brand different</h1>
              </div>

              <div className={styles['desk-ct-w']}>
                <div className={styles['desk-ct-1']}>
                  <img src={TransitIcon} alt="" className={styles['desk-ct-1-ic']} />
                  <h2 className={styles['desk-ct-1-sb']}>Next day as standard</h2>
                  <p className={styles['desk-ct-1-pr']}>
                    Order before 3pm and get your order the next day as standard
                  </p>
                </div>

                <div className={styles['desk-ct-1']}>
                  <img src={CheckmarkIcon} alt="" className={styles['desk-ct-1-ic']} />
                  <h2 className={styles['desk-ct-1-sb']}>Made by true artisans</h2>
                  <p className={styles['desk-ct-1-pr']}>
                    Handmade crafted goods made with real passion and craftmanship
                  </p>
                </div>

                <div className={styles['desk-ct-1']}>
                  <img src={PurchaseIcon} alt="" className={styles['desk-ct-1-ic']} />
                  <h2 className={styles['desk-ct-1-sb']}>Unbeatable prices</h2>
                  <p className={styles['desk-ct-1-pr']}>
                    For our materials and quality you won’t find better prices anywhere
                  </p>
                </div>

                <div className={styles['desk-ct-1']}>
                  <img src={RecycleIcon} alt="" className={styles['desk-ct-1-ic']} />
                  <h2 className={styles['desk-ct-1-sb']}>Recycled packaging</h2>
                  <p className={styles['desk-ct-1-pr']}>
                    We use 100% recycled packaging to ensure our footprint is manageable
                  </p>
                </div>
              </div>
            </div>

            <div className={styles['desk-content-2']}>
              <div className={styles['desk-head-block-2-c']}>
                <h2 className={styles['desk-ct-2-sb']}>New ceramics</h2>
              </div>

              <div className={styles['desk-ct-2-products-main-c']}>
                <div className={styles['desk-ct-2-products-sub-c']}>
                  {CatalogDeskAPI.map((product) => (
                    <ProductListDesktop key={product.id} {...product} />
                  ))}
                </div>
              </div>

              <div className={styles['desk-ct-2-btn-c']}>
                <NavLink to="/products">
                  <button className={styles['desk-ct-2-button']}>View Collection</button>
                </NavLink>
              </div>
            </div>

            <div className={styles['desk-content-3']}>
              <div className={styles['desk-head-block-3-c']}>
                <h2 className={styles['desk-ct-3-sb']}>Our popular products</h2>
              </div>

              <div className={styles['desk-our-popular-products-c']}>
                <div className={styles['desk-ct-3-products-sx']}>
                  <OurPopularM image={SofaImage} title={'The Lucy Lamp'} price={399} />
                </div>

                <div className={styles['desk-ct-3-products-sx']}>
                  <OurPopularM image={DandyChairImage} title={'Rustic Vase Set'} price={155} />
                </div>

                <div className={styles['desk-ct-3-products-sx']}>
                  <OurPopularM image={DarkDandyImage} title={'Rustic Vase Set'} price={155} />
                </div>
              </div>

             <Link to="/products" className='cursor-pointer'>
                <div className={styles['desk-ct-2-btn-c']}>
                  <button className={styles['desk-ct-2-button']}>View Collection</button>
                </div>
             </Link>
            </div>

            <div className={styles['desk-content-4']}>
              <div className={styles['desk-w-4']}>
                <div className={styles['desk-join-c']}>
                  <h4 className={styles['desk-join-sb']}>Join the club and get the benefits</h4>

                  <p className={styles['desk-join-pr']}>
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales,
                    pop up stores and more
                  </p>
                </div>

                <div className={styles['desk-join-in-c']}>
                  <input
                    type="text"
                    className={styles['desk-join-in']}
                    placeholder="your@email.com"
                  />
                  <button className={styles['desk-join-button']}>Sign Up</button>
                </div>
              </div>
            </div>

            <div className={styles['desk-content-5']}>
              <div className={styles['desk-l-5']}>
                <div className={styles['desk-ct-5-c']}>
                  <h5 className={styles['desk-ct-5-sb']}>
                    From a studio in London to a global brand with <br /> over 400 outlets
                  </h5>

                  <p className={styles['desk-ct-5-pr']}>
                    When we started Avion, the idea was simple. Make high quality furniture <br />{' '}
                    affordable and available for the mass market.
                  </p>

                  <p className={styles['desk-ct-5-pr-1']}>
                    Handmade, and lovingly crafted furniture and homeware is what we live,
                    <br /> breathe and design so our Chelsea boutique become the hotbed for the{' '}
                    <br /> London interior design community.
                  </p>
                </div>

                <div className={styles['desk-ct-5-btn-c']}>
                  <button className={styles['desk-ct-5-button']}>Get in touch</button>
                </div>
              </div>

              <div className={styles['desk-r-5']}>
                {/* <div className={styles['desk-spa-c']}>

                  <img src={spa} alt='' className={styles['desk-spa-img']} />

                </div> */}
              </div>
            </div>
          </div>
        </div>
          {/* End of Desktop */}
        <div className={styles['section-wrapper']}>
          <div className={styles['section-content-1']}>
            <div className={styles['head-block-1-container']}>
              <h1 className={styles['head-block-1']}>
                What makes our brand <br /> different
              </h1>
            </div>

            <div className={styles['ct-1']}>
              <img src={TransitIcon} alt="" className={styles['ct-1-ic']} />
              <h2 className={styles['ct-1-sb']}>Next day as standard</h2>
              <p className={styles['ct-1-pr']}>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className={styles['ct-1']}>
              <img src={CheckmarkIcon} alt="" className={styles['ct-1-ic']} />
              <h2 className={styles['ct-1-sb']}>Made by true artisans</h2>
              <p className={styles['ct-1-pr']}>
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>

            <div className={styles['ct-1']}>
              <img src={PurchaseIcon} alt="" className={styles['ct-1-ic']} />
              <h2 className={styles['ct-1-sb']}>Unbeatable prices</h2>
              <p className={styles['ct-1-pr']}>
                For our materials and quality you won’t find better prices anywhere
              </p>
            </div>

            <div className={styles['ct-1']}>
              <img src={RecycleIcon} alt="" className={styles['ct-1-ic']} />
              <h2 className={styles['ct-1-sb']}>Recycled packaging</h2>
              <p className={styles['ct-1-pr']}>
                We use 100% recycled packaging to ensure our footprint is manageable
              </p>
            </div>
          </div>

          <div className={styles['section-content-2']}>
            <div className={styles['head-block-2-c']}>
              <h2 className={styles['ct-2-sb']}>New ceramics</h2>
            </div>

            <div className={styles['ct-2-products-main-c']}>
              <div className={styles['ct-2-products-sub-c']}>
                <ProductListMobile
                  prImg={RasticImage}
                  prTitle={'Rustic Vase Set'}
                  prPrice={'£155'}
                />
                <ProductListMobile
                  prImg={LucyLampImage}
                  prTitle={'The Lucy Lamp'}
                  prPrice={'£399'}
                />
              </div>

              <div className={styles['ct-2-products-sub-c']}>
                <ProductListMobile prImg={SilkyImage} prTitle={'The Silky Vase'} prPrice={'£125'} />
                <ProductListMobile
                  prImg={DandyImage}
                  prTitle={'The Dandy Chair'}
                  prPrice={'£250'}
                />
              </div>
            </div>

            <div className={styles['ct-2-btn-c']}>
              <button className={styles['ct-2-button']}>View Collection</button>
            </div>
          </div>

          <div className={styles['section-content-3']}>
            <div className={styles['head-block-3-c']}>
              <h2 className={styles['ct-3-sb']}>Our popular products</h2>
            </div>

            <div className={styles['our-popular-products-c']}>
              <div className={styles['ct-3-products-sx']}>
                {OurPopAPI.map((popular) => (
                  <OurPopularM key={popular.id} {...popular} />
                ))}
              </div>
            </div>

            <Link to="/products" className={styles['ct-2-btn-c']}>
              <button className={styles['ct-2-button']}>View Collection</button>
            </Link>
          </div>

          <div className={styles['section-content-4']}>
            <div className={styles['join-c']}>
              <h4 className={styles['join-sb']}>Join the club and get the benefits</h4>

              <p className={styles['join-pr']}>
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
                stores and more
              </p>
            </div>

            <div className={styles['join-in-c']}>
              <input type="text" className={styles['join-in']} placeholder="your@email.com" />

              <button className={styles['join-button']}>Sign Up</button>
            </div>
          </div>

          <div className={styles['section-content-5']}>
            <div className={styles['ct-5-c']}>
              <h5 className={styles['ct-5-sb']}>
                From a studio in London to a global brand with over 400 outlets
              </h5>

              <p className={styles['ct-5-pr']}>
                When we started Avion, the idea was simple. Make high quality furniture affordable
                and available for the mass market.
              </p>

              <p className={styles['ct-5-pr-1']}>
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and
                design so our Chelsea boutique become the hotbed for the London interior design
                community.
              </p>
            </div>

            <div className={styles['ct-5-btn-c']}>
              <button className={styles['ct-5-button']}>Get in touch</button>
            </div>
          </div>
        </div>
            {/* Only Mobile Section here Sofa */}
        <div className={styles['spa-c']}>
          <img src={SpaImage} alt="spa-image" className={styles['spa-img']} />
        </div>
      </div>
    </div>
  );
}
