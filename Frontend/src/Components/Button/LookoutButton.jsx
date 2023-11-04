import React, { useEffect, useState } from 'react'
import './ButtonElements.scss'
import BuyIcon from '../../assets/images/buy-iconitem.png'
import Modals from "../../Components/Modals/Modals";

const LookoutButton = () => {
  const countryData = {
    US: { id: 'country-1' },
    IN: { id: 'country-2' },
    // IT: { id: 'country-3' },
    // NL: { id: 'country-4' },
    // SG: { id: 'country-5' },
  };


  const [countryId, setCountryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/country/')
      .then((response) => response.text())
      .then((data) => {
        const countryInfo = countryData[data];
        if (countryInfo) {
          setCountryId(countryInfo.id);
        } else {
          setCountryId('not-found');
        }
        setLoading(false);
      });
  }, []);


  return (
    <>
    {loading ? (
      <div>Loading Data</div>
    ) : (
    <>
      <div className="buy_nowBtnItem">
        <div id="country-1" className={countryId === 'country-1' ? 'showElements' : 'hideElements'}>
          <a className="buyButton" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/I-AM-Ashish/dp/B0CH2CW7PT/ref=sr_1_1?crid=3CJZ9KW6BTT4&keywords=i+am+ashish+to+i+am&qid=1694183897&sprefix=i+am+ashish+to%2Caps%2C130&sr=8-1&asin=B0CH2CW7PT&revisionId=&format=4&depth=1">
          Look Inside ! <span><img src={BuyIcon} alt="buyicon" /> </span>
          </a>
        </div>
        <div id="country-2" className={countryId === 'country-2' ? 'showElements' : 'hideElements'}>
          <a className="buyButton" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/I-AM-Ashish/dp/B0CH2CW7PT/ref=sr_1_1?crid=3CJZ9KW6BTT4&keywords=i+am+ashish+to+i+am&qid=1694183897&sprefix=i+am+ashish+to%2Caps%2C130&sr=8-1&asin=B0CH2CW7PT&revisionId=&format=4&depth=1">
          Look Inside ! <span><img src={BuyIcon} alt="buyicon" /> </span>
          </a>
          {/* <Modals ButtonModalTitle={"Look Inside !"}
                      bodydata={"Book Will Be Available From 2st September 2023"}
                    /> */}
        </div>
        {/* <div id="country-3" className={countryId === 'country-3' ? 'showElements' : 'hideElements'}>
        <a className="buyButton"  target="_blank" rel="noopener noreferrer" href="https://www.flipkart.com/">
           BuyNow <span><img src={BuyIcon} alt="buyicon" /> </span>
        </a>
      </div>
      <div id="country-4" className={countryId === 'country-4' ? 'showElements' : 'hideElements'}>
        <a className="buyButton"  target="_blank" rel="noopener noreferrer" href="https://www.shopify.com/">
          BuyNow <span><img src={BuyIcon} alt="buyicon" /> </span>
        </a>
      </div>
      <div id="country-5" className={countryId === 'country-5' ? 'showElements' : 'hideElements'}>
        <a className="buyButton"  target="_blank" rel="noopener noreferrer" href="https://www.godaddy.com/">
          BuyNow <span><img src={BuyIcon} alt="buyicon" /> </span>
        </a>
      </div> */}
        <div
          id="not-found"
          className={countryId === 'not-found' ? 'showElements' : 'hideElements'}
        >
          <a className="buyButton" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/I-AM-Ashish/dp/B0CH2CW7PT/ref=sr_1_1?crid=3CJZ9KW6BTT4&keywords=i+am+ashish+to+i+am&qid=1694183897&sprefix=i+am+ashish+to%2Caps%2C130&sr=8-1&asin=B0CH2CW7PT&revisionId=&format=4&depth=1">
          Look Inside ! <span><img src={BuyIcon} alt="buyicon" /> </span>
          </a>
        </div>
      </div>
    </>
    )}
    </>
  )
}
export default LookoutButton


