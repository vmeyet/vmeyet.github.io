import React, { useState , useEffect } from "react";
import styles from "./Code.pcss";

const BlinkingCursor = () => {
  const [shown, setShown] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => { setShown(!shown) }, 500);
    return () => clearInterval(interval);
  }, [shown]);
  
  return <span className={styles.blinkingCursor}>{shown ? '▌' : ''}</span>
}

const Code = ({text}: { text: string }) => {
  const [nbCharShown, setNbCharShown] = useState(0);
  const trimmedText = text.trim();
  const partialText = trimmedText.substr(0, nbCharShown);
  const lines = partialText.split("\n");
  const showBlinkingCursor = partialText !== trimmedText;
  
  useEffect(() => {
    const interval = setInterval(() => { setNbCharShown(nbCharShown + 1) }, Math.random() * Math.random() * 200);
    return () => clearInterval(interval);
  }, [nbCharShown]);
  
  return <div className={styles.code}>
  {
    lines.map((part, idx) => <span key={idx}>
      {part}
      { idx !== lines.length - 1 && <br /> }
    </span>)
  }
  { showBlinkingCursor && <BlinkingCursor /> }
  </div>;
};

export default Code;