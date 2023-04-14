import React, { useState, useCallback } from 'react';
import Modal from "../modal/Modal";

const HoverableLine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div>
      <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over this line to open the modal!
      </p>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HoverableLine;
