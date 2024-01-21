import styled from 'styled-components';

export const Item = styled.li`
  width: 274px;
  height: 426px;
  flex-basis: calc(100% / 4 - 29px);
  margin-left: 29px;
  margin-top: 50px;
  position: relative;
`;


export const Photo = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
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
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: #ffff;
  position: absoulte;
  bottom: 0;
`;

export const Paragrapher = styled.p`
  white-space: nowrap;
  width: 270px;
`;