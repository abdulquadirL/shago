import { useState } from 'react';
import React from 'react'

export const Tab = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonHover = () => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div>Tab</div>
  )
}
