'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from '@/components/sections/Loader';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import PortfolioCanvas from '@/components/sections/PortfolioCanvas';
import TwinFloatingButton from '@/components/widgets/TwinFloatingButton';

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaderDone && (
          <Loader onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      {loaderDone && (
        <>
          <ScrollProgress />
          <Navbar />
          <PortfolioCanvas />
          <TwinFloatingButton />
        </>
      )}
    </>
  );
}
