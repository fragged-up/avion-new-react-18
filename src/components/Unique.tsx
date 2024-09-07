import styles from "@/CSSModules/Content-m.module.css";
// /Users/odedsamuel/Desktop/MainFolders/ec-new/avion-new/src/CSSModules/Content-m.module.css
import checkMark from "../assets/icons/checkMark.svg";
import recycleIcon from "../assets/icons/recycleIcon.svg";
import purchaseIcon from "../assets/icons/purchaseIcon.svg";
import transitDelivery from "../assets/icons/transitDelivery.svg";

function Unique() {
  return (
    <>
      <div className={styles["unique-w"]}>
        <div className={styles["section-content-1"]}>
          <div className={styles["head-block-1-container"]}>
            <h1 className={styles["head-block-1"]}>
              What makes our brand <br /> different
            </h1>
          </div>

          <div className={styles["ct-1"]}>
            <img src={transitDelivery} alt="" className={styles["ct-1-ic"]} />
            <h2 className={styles["ct-1-sb"]}>Next day as standard</h2>
            <p className={styles["ct-1-pr"]}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className={styles["ct-1"]}>
            <img src={checkMark} alt="" className={styles["ct-1-ic"]} />
            <h2 className={styles["ct-1-sb"]}>Made by true artisans</h2>
            <p className={styles["ct-1-pr"]}>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className={styles["ct-1"]}>
            <img src={purchaseIcon} alt="" className={styles["ct-1-ic"]} />
            <h2 className={styles["ct-1-sb"]}>Unbeatable prices</h2>
            <p className={styles["ct-1-pr"]}>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className={styles["ct-1"]}>
            <img src={recycleIcon} alt="" className={styles["ct-1-ic"]} />
            <h2 className={styles["ct-1-sb"]}>Recycled packaging</h2>
            <p className={styles["ct-1-pr"]}>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
        <div className={styles["unique-section-2"]}>
          <div className={styles["join-c"]}>
            <h4 className={styles["join-sb"]}>
              Join the club and get the benefits
            </h4>
            <p className={styles["join-pr"]}>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>

          <div className={styles["unique-join-in-c"]}>
            <span className={styles["unique-span"]}>
              <input
                type="text"
                className={styles["unique-join-in"]}
                placeholder="your@email.com"
              />
              <button className={styles["unique-join-button"]}>Sign Up</button>
            </span>
          </div>
        </div>
      </div>

      <div className={styles["desk-unique"]}>
        <div className={styles["desk-blocked-head"]}>
          <h1 className={styles["desk-head-block-1"]}>
            What makes our brand different
          </h1>
        </div>

        <div className={styles["desk-ct-w"]}>
          <div className={styles["desk-unique-ct-1"]}>
            <img
              src={transitDelivery}
              alt=""
              className={styles["desk-ct-1-ic"]}
            />
            <h2 className={styles["desk-ct-1-sb"]}>Next day as standard</h2>
            <p className={styles["desk-ct-1-pr"]}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className={styles["desk-unique-ct-1"]}>
            <img src={checkMark} alt="" className={styles["desk-ct-1-ic"]} />
            <h2 className={styles["desk-ct-1-sb"]}>Made by true artisans</h2>
            <p className={styles["desk-ct-1-pr"]}>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className={styles["desk-unique-ct-1"]}>
            <img src={purchaseIcon} alt="" className={styles["desk-ct-1-ic"]} />
            <h2 className={styles["desk-ct-1-sb"]}>Unbeatable prices</h2>
            <p className={styles["desk-ct-1-pr"]}>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className={styles["desk-unique-ct-1"]}>
            <img src={recycleIcon} alt="" className={styles["desk-ct-1-ic"]} />
            <h2 className={styles["desk-ct-1-sb"]}>Recycled packaging</h2>
            <p className={styles["desk-ct-1-pr"]}>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>

        <div className={styles["desk-content-4"]}>
          <div className={styles["desk-w-4"]}>
            <div className={styles["desk-join-c"]}>
              <h4 className={styles["desk-join-sb"]}>
                Join the club and get the benefits
              </h4>
              <p className={styles["desk-join-pr"]}>
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>

            <div className={styles["desk-join-in-c"]}>
              <input
                type="text"
                className={styles["desk-join-in"]}
                placeholder="your@email.com"
              />
              <button className={styles["desk-join-button"]}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GreyUnique() {
  return (
    <div className={styles["grey-unique"]}>
      <div className={styles["grey-section-content-1"]}>
        <div className={styles["grey-head-block-1-container"]}>
          <h1 className={styles["grey-head-block-1"]}>
            What makes our brand <br className={styles["grey-line-down"]} />{" "}
            different
          </h1>
        </div>
        <div className={styles["grey-spacer"]}>
          <div className={styles["grey-ct-1"]}>
            <img
              src={transitDelivery}
              alt=""
              className={styles["grey-ct-1-ic"]}
            />
            <h2 className={styles["grey-ct-1-sb"]}>Next day as standard</h2>
            <p className={styles["grey-ct-1-pr"]}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className={styles["grey-ct-1"]}>
            <img src={checkMark} alt="" className={styles["grey-ct-1-ic"]} />
            <h2 className={styles["grey-ct-1-sb"]}>Made by true artisans</h2>
            <p className={styles["grey-ct-1-pr"]}>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className={styles["grey-ct-1"]}>
            <img src={purchaseIcon} alt="" className={styles["grey-ct-1-ic"]} />
            <h2 className={styles["grey-ct-1-sb"]}>Unbeatable prices</h2>
            <p className={styles["grey-ct-1-pr"]}>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className={styles["grey-ct-1"]}>
            <img src={recycleIcon} alt="" className={styles["grey-ct-1-ic"]} />
            <h2 className={styles["grey-ct-1-sb"]}>Recycled packaging</h2>
            <p className={styles["grey-ct-1-pr"]}>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
      <div className={styles["grey-main-bottom"]}>
        <div className={styles["grey-wrapper-bottom"]}>
          <div className={styles["grey-join-c"]}>
            <h4 className={styles["grey-join-sb"]}>
              Join the club and get the benefits
            </h4>
            <p className={styles["grey-join-pr"]}>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>

          <div className={styles["grey-unique-join-in-c"]}>
            <span className={styles["grey-unique-span"]}>
              <input
                type="text"
                className={styles["grey-unique-join-in"]}
                placeholder="your@email.com"
              />
              <button className={styles["grey-unique-join-button"]}>
                Sign Up
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Unique, GreyUnique };
