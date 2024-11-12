import ContentPr from '@/components/Mobile/ContentPr';

export default function SortPage() {
  return (
    <div className=''>
      <ContentPr />
    </div>
  );
}

{
  /* <>

<div className={styles["Ap-s-wrapper"]}>

  <div className={styles["Ap-s-container"]}>

    <div className={styles["Ap-s-bg-c"]}>

      <p className={styles["text-logo"]}>All products</p>

    </div>

    <div className={styles["option-c"]}>

      <div className={styles["filters-c"]}>

        <ul className={styles["filters-s"]}>

          <span className={styles["dr-ic-c"]}>

            Filters

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <li className={styles["filter-option"]}></li>

          <li className={styles["filter-option"]}></li>

          <li className={styles["filter-option"]}></li>

        </ul>

      </div>



      <div className={styles["srt-c"]}>

        <ul className={styles["srt-s"]}>

          <span className={styles["dr-ic-c"]}>

            Sorting

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <li className={styles["srt-option"]}></li>

          <li className={styles["srt-option"]}></li>

          <li className={styles["srt-option"]}></li>

        </ul>

      </div>

    </div>



    <div className={styles["catalog-data"]}>

      <div className={styles["catalog-dt-w"]}>

        <div className={styles["catalog-dt-c"]}>

          <ProductCatalog

            prImg={rusticCatalog}

            prTitle={"Rustic Vase Set"}

            prPrice={"£155"}

          />

          <ProductCatalog

            prImg={silkyCatalog}

            prTitle={"The Silky Vase"}

            prPrice={"£125"}

          />

        </div>

        <div className={styles["catalog-dt-c"]}>

          <ProductCatalog

            prImg={lucyCatalog}

            prTitle={"The Lucy Lamp"}

            prPrice={"£399"}

          />

          <ProductCatalog

            prImg={dandyCatalog}

            prTitle={"The Dandy chair"}

            prPrice={"£250"}

          />

        </div>

      </div>

      <div className={styles["catalog-dt-w-2"]}>

        <div className={styles["catalog-dt-c-2"]}>

          <ProductCatalog

            prImg={rusticCatalog}

            prTitle={"Rustic Vase Set"}

            prPrice={"£155"}

          />

          <ProductCatalog

            prImg={silkyCatalog}

            prTitle={"The Silky Vase"}

            prPrice={"£125"}

          />

        </div>

        <div className={styles["catalog-dt-c-2"]}>

          <ProductCatalog

            prImg={lucyCatalog}

            prTitle={"The Lucy Lamp"}

            prPrice={"£399"}

          />

          <ProductCatalog

            prImg={dandyCatalog}

            prTitle={"The Dandy chair"}

            prPrice={"£250"}

          />

        </div>

      </div>



      <div className={styles["catalog-btn-c"]}>

        <button className={styles["catalog-button"]}>

          View Collection

        </button>

      </div>

    </div>

  </div>

</div>



<div className={styles["desk-ap-w"]}>

  <div className={styles["desk-ap-c"]}>

    <div className={styles["Ap-s-bg-c"]}>

      <p className={styles["text-logo"]}>All Products</p>

    </div>



    <div className={styles["desk-option-c"]}>

      <div className={styles["user-option-bar-left"]}>

        <div className={styles["desk-catagory-c"]}>

          <span className={styles["desk-dr"]}>

            Catagory

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <div className={styles["desk-catagory"]}></div>

        </div>



        <div className={styles["desk-product-type-c"]}>

          <span className={styles["desk-dr"]}>

            Product type

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <div className={styles["desk-product-type"]}></div>

        </div>



        <div className={styles["desk-price-c"]}>

          <span className={styles["desk-dr"]}>

            Price

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <div className={styles["desk-price"]}></div>

        </div>



        <div className={styles["desk-brand-c"]}>

          <span className={styles["desk-dr"]}>

            Brand

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>



          <div className={styles["desk-brand"]}></div>

        </div>

      </div>



      <div className={styles["user-option-bar-right"]}>

        <p className={styles["date-title"]}>Sorting By :</p>

        <div className={styles["date-added-c"]}>

          <span className={styles["desk-dr"]}>

            Date Added

            <img src={dr} alt="" className={styles["dr-ic"]} />

          </span>

          <div className={styles["date-added"]}></div>

        </div>

      </div>

    </div>

  </div>



  <div className={styles["product-layout-w"]}>

    <div className={styles["product-layout"]}>

      <DeskCatalog

        prImg={dDandy}

        prTitle={"The Dandy Chair"}

        prPrice={"250"}

      />

      <DeskCatalog

        prImg={dRustic}

        prTitle={"Rustic Vase Set"}

        prPrice={"155"}

      />

      <DeskCatalog

        prImg={dSilky}

        prTitle={"The Silky Vase"}

        prPrice={"125"}

      />

      <DeskCatalog

        prImg={dLucy}

        prTitle={"The Lucy Lamp"}

        prPrice={"399"}

      />

    </div>



    <div className={styles["product-layout"]}>

      <DeskCatalog

        prImg={dFlights}

        prTitle={"Falled Fl Lights"}

        prPrice={"840"}

      />

      <DeskCatalog

        prImg={dVase}

        prTitle={"Ceramic Origin"}

        prPrice={"435"}

      />

      <DeskCatalog

        prImg={dSm}

        prTitle={"Vintage Chair"}

        prPrice={"250"}

      />

      <DeskCatalog

        prImg={dOrangeLucy}

        prTitle={"Classic Orange"}

        prPrice={"750"}

      />

    </div>



    <div className={styles["product-layout"]}>

      <DeskCatalog

        prImg={dDandy}

        prTitle={"The Dandy Chair"}

        prPrice={"250"}

      />

      <DeskCatalog

        prImg={dRustic}

        prTitle={"Rustic Vase Set"}

        prPrice={"155"}

      />

      <DeskCatalog

        prImg={dSilky}

        prTitle={"The Silky Vase"}

        prPrice={"125"}

      />

      <DeskCatalog

        prImg={dLucy}

        prTitle={"The Lucy Lamp"}

        prPrice={"399"}

      />

    </div>



    <div className={styles["desk-view-btn-c"]}>

      <button className={styles["desk-view-btn"]}>Load More</button>

    </div>

  </div>

</div>

</> */
}
