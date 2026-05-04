'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function StyledComponentsRegistry({ children }: Props) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    return <>{styles}</>;
  });

  // On the client, just render normally
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  // On the server, collect styles
  return (
    <StyleSheetManager sheet={sheet.instance}>
      {children}
    </StyleSheetManager>
  );
}