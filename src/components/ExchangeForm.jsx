import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

import trx from "../assets/images/trx.svg";
import trxGreen from "../assets/images/trx_green.svg";
import usdt from "../assets/images/usdt.svg";
import change from "../assets/images/change.svg";
import down from "../assets/images/down.svg";

const address = 'TXYZ1234567890ABCDEF...'

export const ExchangeForm = ({ exchangeRate = 3.608924, theme}) => {
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("TRX");
  const [payAmount, setPayAmount] = useState("1");

  const handleSwap = () => {
    setFromCurrency((prev) => {
      setToCurrency(prev);
      return toCurrency;
    });
  };

  const receiveAmount = payAmount && !isNaN(parseFloat(payAmount))
  ? (parseFloat(payAmount) * exchangeRate).toFixed(6)
  : "0";

  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mb-8">
      <CardContent className="p-6">
      <CurrencyInput
        label="PAY"
        value={payAmount}
        onChange={(val) => setPayAmount(val)}
        currency={fromCurrency}
        hasBorder
        theme={theme}
      />

        <ExchangeIcon onClick={handleSwap} />

        <CurrencyInput
          label="RECEIVE"
          value={receiveAmount}
          currency={toCurrency}
          readOnly
          theme={theme}
        />

        <ShowAddressToggle address={address} />

        <Button className="w-full h-[60px] rounded-xl bg-white hover:bg-white/90 font-bold text-black text-[20.4px] tracking-[1.02px] mb-[42px] transition-all">
          BUY {receiveAmount} {toCurrency}
        </Button>

        <ExchangeRateInfo currency={exchangeRate} />
      </CardContent>
    </Card>
  );
};

const CurrencyInput = ({
  label,
  value,
  onChange,
  currency,
  theme,
  readOnly = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-1">
      <label className="opacity-60 font-normal text-white text-sm">
        {label}
      </label>
      <div
        className={`flex items-center justify-between px-4 py-0 h-[60px] bg-black rounded-xl border-2 border-solid border-transparent ${
          isFocused ? " border-[var(--color-primary)]" : ""
        }`}
      >
        {readOnly ? (
          <div className="font-medium text-white text-[28px]">
            {value}
          </div>
        ) : (
          <Input
            type="number"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="border-none bg-transparent text-white font-medium text-[28px] p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        )}
        <CurrencyBadge currency={currency} theme={theme} />
      </div>
    </div>
  );
};


const CurrencyBadge = ({ currency, theme }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="opacity-70 font-normal text-white text-[20.4px] text-center">
        {currency}
      </div>
      {currency === "TRX" && (
        <div className="relative w-[21px] h-[21px]">
          <div className="relative h-[21px]">
          {theme === 'green' ? (
            <>
              <img
                className="absolute w-3 w-[21px] h-[21px]"
                alt="Vector"
                src={trxGreen}
              />
            </>
          ) : (
            <>
              <img
                className="absolute w-3 w-[21px] h-[21px]"
                alt="Vector"
                src={trx}
              />
            </>
            )}
          </div>
        </div>
      )}
      {currency === "USDT" && (
        <div className="relative w-[21px] h-[21px]  bg-[100%_100%]">
          <img
            className="absolute w-[21px] h-[21px] h-3"
            alt="Vector"
            src={usdt}
          />
        </div>
      )}     
    </div>
  );
};

const ExchangeIcon = ({ onClick }) => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((prev) => prev + 360);
    if (onClick) onClick();
  };

  return (
    <div className="flex justify-center -mt-[10px] -mb-[40px]">
      <button
        className="w-[75px] h-[75px] bg-[#1b1b1b] rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <img
          className="w-[62px] h-[62px] transition-transform duration-500"
          alt="Exchange"
          src={change}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </button>
    </div>
  );
};


export const ShowAddressToggle = ({ address = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="mt-[27px] mb-[44px]">
      <button
        className="flex items-center justify-between w-full"
        onClick={toggle}
      >
        <div className="opacity-60 font-normal text-white text-sm">
          SHOW TRX RECEIVER ADDRESS
        </div>
        <div className="w-[14.28px] h-[14.28px] transition-transform duration-300">
          <img
            className={`w-3.5 h-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            alt="Toggle arrow"
            src={down}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {address ? (
          <div className="mt-4 text-white text-sm px-4 py-3 bg-[#1c1c1c] rounded">
            <span className="font-mono">{address}</span>
          </div>
        ) : (
          <div className="mt-4 text-white text-sm px-4 py-3 bg-[#1c1c1c] rounded opacity-50 italic">
            Loading address...
          </div>
        )}
      </div>
    </div>
  );
};


const ExchangeRateInfo = ({ currency }) => {
  return (
    <div className="text-center space-y-2">
      <div className="text-[17.4px] text-center mb-[106px]">
        <span className="font-bold text-[#ababab] leading-[25px]">
          Exchange Rate
          <br />
        </span>
        <span className="font-bold text-white leading-[25px]">
          1 USDT ≈ {currency} TRX
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className="w-2.5 h-2.5 p-0 bg-[#74eb69] rounded-[5px]" />
          <div className="font-normal text-[#ababab] text-[17.4px] text-center leading-[25px]">
            Last purchase:
          </div>
        </div>
        <div className="font-bold text-[#ababab] text-[17.4px] text-center leading-[25px]">
          2 min ago
        </div>
      </div>
    </div>
  );
};