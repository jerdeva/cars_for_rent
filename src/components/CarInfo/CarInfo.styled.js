import styled from 'styled-components';

export const Item = styled.li`
width: 274px;
height: 426px;
flex-basis: calc(100% / 4 - 29px);
margin-left: 29px;
margin-top: 50px;
`


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