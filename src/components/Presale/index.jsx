import style from './Presale.module.scss';
import ethIcon from './assets/sol.svg';
import usdtIcon from './assets/usdt.svg';
import mcIcon from './assets/mc.svg';
import bonkoIcon from './assets/bonko.svg';
import { useTimer } from 'react-timer-hook';
import { Fade, Zoom } from 'react-reveal';
import { useEffect, useRef, useState } from 'react';
import {
  MoonPaySellWidget,
  MoonPaySwapsCustomerSetupWidget,
} from '@moonpay/moonpay-react';
import './widget.scss';

const Presale = ({ className }) => {
  const expiryTimestamp = new Date(1705713398 * 1000);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  const [visible, setVisible] = useState(false);
  const [visibleSwap, setVisibleSwap] = useState(false);
  const solInputRef = useRef(null);
  const bonkoInputRef = useRef(null);

  const calculator = (event) => {
    const { target } = event;
    const id = target.id;

    if (id === 'sol-input') {
      bonkoInputRef.current.value = target.value * 100000000;
    } else if (id === 'bonko-input') {
      solInputRef.current.value = target.value / 100000000;
    }
  };

  return (
    <>
      {visibleSwap && (
        <MoonPaySwapsCustomerSetupWidget
          variant='overlay'
          baseCurrencyCode='eth'
          baseCurrencyAmount='0.1'
          visible={visibleSwap}
        />
      )}
      {visible && (
        <MoonPaySellWidget
          variant='overlay'
          baseCurrencyCode='eth'
          baseCurrencyAmount='0.1'
          quoteCurrencyCode='usd'
          visible={visible}
        />
      )}
      <Fade>
        <div className={`${style.presale} ${className}`}>
          <div className={style.presale__title}>
            <Zoom cascade>presale Live</Zoom>
          </div>
          <div className={style.presale__subtitle}>
            <Zoom cascade>BONKOSAURUS COIN</Zoom>
          </div>
          <Zoom>
            <div className={style.presaleTimer}>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>{days}</div>
                <div className={style.presaleTimer__colLabel}>days</div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>:</div>
                <div className={style.presaleTimer__colLabel}></div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>{hours}</div>
                <div className={style.presaleTimer__colLabel}>hours</div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>:</div>
                <div className={style.presaleTimer__colLabel}></div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>{minutes}</div>
                <div className={style.presaleTimer__colLabel}>minutes</div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>:</div>
                <div className={style.presaleTimer__colLabel}></div>
              </div>
              <div className={style.presaleTimer__col}>
                <div className={style.presaleTimer__colValue}>{seconds}</div>
                <div className={style.presaleTimer__colLabel}>seconds</div>
              </div>
            </div>
          </Zoom>
          <div className={style.presalePrice}>
            <div className={style.presalePrice__title}>
              <span>
                <Zoom cascade>$BONKO Price: $0.1</Zoom>
              </span>
              <span>
                <Zoom cascade>1 Sol=100,000,000 BONKO</Zoom>
              </span>
            </div>
            <Zoom>
              <div className={style.presalePrice__line}>
                <span></span>
              </div>
            </Zoom>
          </div>
          <div className={style.presaleRaised}>
            <Zoom>SOL Raised:</Zoom>

            <span>
              <Zoom>2,200,000</Zoom>
            </span>
          </div>
          <form className={style.presaleBuy}>
            <div className={style.presaleBuy__title}>
              <Zoom cascade>Buy SOL</Zoom>
            </div>
            <div className={style.presaleBuy__type}>
              <Zoom>
                <label>
                  <input type='radio' defaultChecked name='payment-select' />
                  <span onClick={() => setVisibleSwap(!visibleSwap)}>
                    <img src={ethIcon} alt='' />
                  </span>
                </label>
              </Zoom>
              <Zoom>
                <label>
                  <input type='radio' name='payment-select' />
                  <span onClick={() => setVisibleSwap(!visibleSwap)}>
                    <img src={usdtIcon} alt='' />
                  </span>
                </label>
              </Zoom>
              <Zoom>
                <label>
                  <input type='radio' name='payment-select' />
                  <span onClick={() => setVisible(!visible)}>
                    <img src={mcIcon} alt='' />
                  </span>
                </label>
              </Zoom>
            </div>
            <div className={style.presaleBuy__text}>
              $SOL > $BONKO Calculator
            </div>
            <div className={style.presaleBuy__calc}>
              <div className={style.presaleBuy__calcItem}>
                {/* <span>
                  <Zoom cascade>Pay with SOL</Zoom>
                </span> */}
                <Zoom>
                  <label className={style.input}>
                    <div className={style.input__icon}>
                      <img src={ethIcon} alt='' />
                    </div>
                    <input
                      id='sol-input'
                      ref={solInputRef}
                      onChange={calculator}
                      defaultValue={0}
                      type='number'
                      min={0}
                    />
                  </label>
                </Zoom>
              </div>
              <div className={style.presaleBuy__calcItem}>
                {/* <span>
                  <Zoom cascade>Recevi Bonkosaurus</Zoom>{' '}
                </span> */}
                <Zoom>
                  <label className={style.input}>
                    <div className={style.input__icon}>
                      <img src={bonkoIcon} alt='' />
                    </div>
                    <input
                      id='bonko-input'
                      ref={bonkoInputRef}
                      onChange={calculator}
                      defaultValue={0}
                      type='number'
                      min={0}
                    />
                  </label>
                </Zoom>
              </div>
            </div>
            <Zoom>
              <div className={style.presaleBuy__btn}>
                SEND SOL HERE <br />{' '}
                552ybqsfngh7JfGzLUmwEtnPgP6Nvv49WXnfnfiRQY2D
              </div>
            </Zoom>
          </form>
          <Zoom>
            <div className={style.presaleBuy__label}>
              $BONKO will be airdropped after presale ends
            </div>
          </Zoom>
        </div>
      </Fade>
    </>
  );
};

export default Presale;
