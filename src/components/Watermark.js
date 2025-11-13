import React, { useEffect, useState } from "react";

const WatermarkCloud = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // أول ظهور بعد 5 ثواني
    const firstTimer = setTimeout(() => setVisible(true), 5000);

    // بعد كده كل دقيقة (60000ms)
    const interval = setInterval(() => setVisible(true), 60000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  // نخفيها بعد انتهاء الأنيميشن (20 ثانية)
  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => setVisible(false), 20000);
    return () => clearTimeout(hideTimer);
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="cloud-watermark">
          <span>this is website created by Software engineer / Mariam Soliman</span>
        </div>
      )}
    </>
  );
};

export default WatermarkCloud;
