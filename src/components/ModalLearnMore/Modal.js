import React, {  useEffect } from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './Modal.styled';

export const Modal = ({ onClick, children }) => {
 const onKeyDown = e => {
   if (e.code === 'Escape') {
     onClick();
   }
 };

 const onClickClose = () => {
   onClick();
 };

 const onClickBackDrop = e => {
   if (e.currentTarget === e.target) {
     onClick();
   }
 };

 useEffect(() => {
   window.addEventListener('keydown', onKeyDown);

   return () => {
     window.removeEventListener('keydown', onKeyDown);
   };
 });
  
  return (
    <ModalOverlay onClick={onClickBackDrop}>
      <ModalContainer>
        <CloseButton onClick={onClickClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

