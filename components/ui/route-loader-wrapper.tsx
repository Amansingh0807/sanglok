'use client';

import React from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import RouteLoader from './route-loader';

const RouteLoaderWrapper: React.FC = () => {
  const { isLoading } = useLoading();
  
  return <RouteLoader isLoading={isLoading} />;
};

export default RouteLoaderWrapper;