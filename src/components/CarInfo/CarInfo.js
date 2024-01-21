import {
  Photo,
  ModelSpan,
  MakerModelYearPriceWrap,
  Item,
  BTN,
  BtnDiv,
  Paragrapher,
} from './CarInfo.styled';


export function CarInfo({ car }) {
  const address = car.address.split(',');
  const country = address[2].replace(' ', '');
  const city = address[1].replace(' ', '');

  return (
    <Item>
      <Photo src={car.img} alt="car" />
      <MakerModelYearPriceWrap>
        <Paragrapher>
          {car.make} <ModelSpan>{car.model}</ModelSpan>, {car.year}
        </Paragrapher>
        <p>{car.rentalPrice}</p>
      </MakerModelYearPriceWrap>
      <Paragrapher>
        {country} | {city} | {car.rentalCompany}
      </Paragrapher>
      <Paragrapher>
        {car.type} | {car.model} | {car.functionalities[1]}
      </Paragrapher>
      <BtnDiv>
        <BTN>Learn more</BTN>
      </BtnDiv>
    </Item>
  );
}
