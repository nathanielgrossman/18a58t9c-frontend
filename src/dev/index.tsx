import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import Loader from "../components/Loader";

import { DevContextProvider } from "./DevContext";

const View = styled.div<{ greyBackground: boolean }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ greyBackground }) => css`
    background-color: ${greyBackground && `#888888`};
  `}
`;

const Bar = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  padding: 0em 0.5em 0em 0.5em;
  z-index: 1;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1em;
  vertical-align: text-bottom;
  margin-right: 1em;
`;

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [greyBackground, setGreyBackground] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("Loading...");
  const [fontSize, setFontSize] = useState<number>(1.25);
  const [globalRate, setGlobalRate] = useState<number | undefined>();
  const [rateLow, setRateLow] = useState<number>(8);
  const [rateHigh, setRateHigh] = useState<number>(40);
  const [debugColor, setDebugColor] = useState<boolean>(false);
  const [shadowTime, setShadowTime] = useState<number>(0.5);
  const [colorTime, setColorTime] = useState<number>(0.25);
  const [hLow, setHLow] = useState<number>(-5);
  const [hHigh, setHHigh] = useState<number>(2);
  const [vLow, setVLow] = useState<number>(-2);
  const [vHigh, setVHigh] = useState<number>(5);
  const [blurLow, setBlurLow] = useState<number>(0);
  const [blurHigh, setBlurHigh] = useState<number>(7);

  const toggleBackground = () => setGreyBackground(!greyBackground);
  const toggleError = () => setError(!error);
  const toggleDebugColor = () => setDebugColor(!debugColor);

  // util to unmount and remount loader to ensure animation changes
  useEffect(() => {
    setShowLoader(false);
    setTimeout(() => setShowLoader(true), 0);
  }, [
    error,
    globalRate,
    rateLow,
    rateHigh,
    debugColor,
    shadowTime,
    colorTime,
    hLow,
    hHigh,
    vLow,
    vHigh,
    blurLow,
    blurHigh,
    fontSize,
  ]);

  return (
    <DevContextProvider error={error}>
      <View greyBackground={greyBackground}>
        <Bar id="top-bar">
          <Title id="title">18a58t9c loader debug</Title>
          <div>
            <Title>grey background?</Title>
            <input
              type="checkbox"
              checked={greyBackground}
              onChange={toggleBackground}
            />
          </div>
          <div>
            <Title>value</Title>
            <input
              type="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <Title>error?</Title>
            <input type="checkbox" checked={error} onChange={toggleError} />
          </div>
          <div>
            <Title>use debug colors?</Title>
            <input
              type="checkbox"
              checked={debugColor}
              onChange={toggleDebugColor}
            />
          </div>
          <div>
            <Title>font size</Title>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>global rate</Title>
            <input
              type="number"
              value={globalRate}
              onChange={(e) => setGlobalRate(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>rate low limit</Title>
            <input
              type="number"
              value={rateLow}
              onChange={(e) => setRateLow(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>rate high limit</Title>
            <input
              type="number"
              value={rateHigh}
              onChange={(e) => setRateHigh(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>shadow transition time</Title>
            <input
              type="number"
              value={shadowTime}
              onChange={(e) => setShadowTime(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>color transition time</Title>
            <input
              type="number"
              value={colorTime}
              onChange={(e) => setColorTime(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>horizontal offset low limit</Title>
            <input
              type="number"
              value={hLow}
              onChange={(e) => setHLow(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>horizontal offset high limit</Title>
            <input
              type="number"
              value={hHigh}
              onChange={(e) => setHHigh(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>vertical offset low limit</Title>
            <input
              type="number"
              value={vLow}
              onChange={(e) => setVLow(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>vertical offset high limit</Title>
            <input
              type="number"
              value={vHigh}
              onChange={(e) => setVHigh(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>blur size low limit</Title>
            <input
              type="number"
              value={blurLow}
              onChange={(e) => setBlurLow(Number(e.target.value))}
            />
          </div>
          <div>
            <Title>blur size high limit</Title>
            <input
              type="number"
              value={blurHigh}
              onChange={(e) => setBlurHigh(Number(e.target.value))}
            />
          </div>
        </Bar>
        {showLoader && (
          <Loader
            globalRate={globalRate}
            rateLow={rateLow}
            rateHigh={rateHigh}
            text={text}
            colorTextDebugProps={{
              debugColor,
              shadowTime,
              colorTime,
              hLow,
              hHigh,
              vLow,
              vHigh,
              blurLow,
              blurHigh,
              fontSize,
            }}
          />
        )}
      </View>
    </DevContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("render"));
