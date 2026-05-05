"use client";

import { useEffect, useState } from "react";
import { ProgressIndicator, ProgressRoot } from "./styles";

export const ProgressBar = ({
  totalAmount,
  currentAmount,
}: {
  totalAmount: number;
  currentAmount: number;
}) => {
  const progressPercent = Math.ceil((currentAmount / totalAmount) * 100);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPercent), 500);
    return () => clearTimeout(timer);
  }, [progressPercent]);

  return (
    <ProgressRoot value={progress}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressRoot>
  );
};
