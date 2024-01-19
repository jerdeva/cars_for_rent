import {
  Photo,
  ModelSpan,
  MakerModelYearPriceWrap,
  Item,
} from './CarInfo.styled';


export function CarInfo({ car }) {
  const address = car.address.split(',');
  const country = address[2].replace(' ', '');
  const city = address[1].replace(' ', '');

  return (
    <Item>
      <Photo src={car.img} alt="car" />
      <MakerModelYearPriceWrap>
        <p>
          {car.make} <ModelSpan>{car.model}</ModelSpan>, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </MakerModelYearPriceWrap>
      <p>
        {country} | {city} | {car.rentalCompany} 
      </p>
      <p>
        {car.type} | {car.model} | {car.functionalities[1]}
      </p>
      <button>Learn more</button>
    </Item>
  );
}
