import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 100%;
  width: 150px;
  flex-basis: calc((100% - 1 * 16px) / 2);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    gap: 20px;
    width: 209px;
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 426px;
    /* gap: 28px; */
    flex-basis: calc(100% / 4 - 29px);
  }
`;

export const Photo = styled.img`
  /* position: absolute; */
  top: 0;
  right: -37px;
  height: 146px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  @media screen and (min-width: 768px) {
    height: 204px;
    right: -50px;
  }

  @media screen and (min-width: 1440px) {
    /* right: -65px; */
    height: 268px;
  }
`;

export const MakerModelYearPriceWrap = styled.div`
display: flex;
justify-content: space-between;
`

export const ModelSpan = styled.span`
  color: #3470FF;
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BTN = styled.button`
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


export const CarCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    height: 354px;
    gap: 14px;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 146px;
  object-fit: cover;
  border-radius: 14px;

  @media screen and (min-width: 768px) {
    height: 204px;
  }

  @media screen and (min-width: 1440px) {
    height: 268px;
  }
`;

export const Heart = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'var(--color-text-button-and-back)'};
  display: inline-block;
  width: 18px;
  height: 18px;
`;


export const DescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const TitleH3 = styled.p`
  font-size: inherit;
  font-weight: inherit;
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
