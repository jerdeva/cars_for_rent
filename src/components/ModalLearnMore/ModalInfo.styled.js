import styled from 'styled-components';

export const ModalCarWrap = styled.div`
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const ModalCard = styled.div`
  display: flex;
  width: 100%;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const ModalImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit:cover;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const ModalImg = styled.img`
  position: absolute;
  top: -25px;
  right: 0;
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  @media screen and (min-width: 768px) {
    /* width: 461px; */
  }
`;

export const ModalDescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ModalTitleH2 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.42;
  height: 40px;
  overflow-y: scroll;
`;

export const ModalTitleH3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--color-text-conditions);
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: var(--color-back-conditions);
`;
export const Span = styled.span`
  color: var(--color-text-loadmore);
`;

export const DescriptListWrap = styled.div`
  display: flex;
  height: ${props => props.height || 'auto'};
  gap: ${props => props.$gap || '4px'};
  flex-direction: column;
`;

export const DescriptList = styled.ul`
  display: inline-flex;
  height: 18px;
  gap: 6px;
  color: var(--color-text-second);
  white-space: nowrap;
  overflow-x: ${props => props.$overflow || 'hidden'};
  overflow-y: hidden;
`;


export const DescriptItem = styled.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
      content: '';
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: ${props => props.width || '100%'};
  height: 44px;
  padding: 12px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;