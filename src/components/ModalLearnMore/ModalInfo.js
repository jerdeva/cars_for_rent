import {
  makeComaInMileage,
  makeNumberFromPrice,
} from 'components/service/service';
import {
  ModalCarWrap,
  ModalImgWrap,
  ModalImg,
  ModalCard,
  ModalTitleH2,
  Block,
  ModalDescriptionWrap,
  Span,
  DescriptListWrap,
  DescriptList,
  DescriptItem,
  Description,
  ModalTitleH3,
  ConditionsItem,
  ConditionsList,
  Button,
} from './ModalInfo.styled';


export const ModalInfo = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);
  const arrOfConditions = rentalConditions.split('\n');

  const age = conditionWithAge => {
    const conditionWithAgeArr = conditionWithAge.split(': ');
    return conditionWithAgeArr;
  };
  return (
    <ModalCarWrap key={id}>
      <ModalCard>
        <ModalImgWrap>
          <ModalImg src={img} alt={make} />
        </ModalImgWrap>
        <ModalDescriptionWrap>
          <Block>
            <ModalTitleH2>
              {make}
              <Span> {model}</Span>, {year}
            </ModalTitleH2>
            <DescriptListWrap>
              <DescriptList>
                <DescriptItem>{cityCountry[0]}</DescriptItem>
                <DescriptItem>{cityCountry[1]}</DescriptItem>
                <DescriptItem>id: {id}</DescriptItem>
                <DescriptItem>Year: {year}</DescriptItem>
                <DescriptItem>Type: {type}</DescriptItem>
              </DescriptList>
              <DescriptList>
                <DescriptItem>Fuel Consumption: {fuelConsumption}</DescriptItem>
                <DescriptItem>Engine Size: {engineSize}</DescriptItem>
              </DescriptList>
            </DescriptListWrap>
            <Description>{description}</Description>
          </Block>
          <Block>
            <ModalTitleH3>Accessories and functionalities:</ModalTitleH3>
            <DescriptListWrap>
              <DescriptList>
                {accessories?.map(item => (
                  <DescriptItem key={item}>{item}</DescriptItem>
                ))}
              </DescriptList>
              <DescriptList>
                {functionalities?.map(item => (
                  <DescriptItem key={item}>{item}</DescriptItem>
                ))}
              </DescriptList>
            </DescriptListWrap>
            </Block>
            <Block>
              <ModalTitleH3>Rental Conditions:</ModalTitleH3>
              <DescriptListWrap>
                <ConditionsList>
                  <ConditionsItem>
                    {age(arrOfConditions[0])[0]}:{' '}
                    <span>{age(arrOfConditions[0])[1]}</span>
                  </ConditionsItem>
                  <ConditionsItem>{arrOfConditions[1]}</ConditionsItem>
                </ConditionsList>
                <ConditionsList>
                  <ConditionsItem>{arrOfConditions[2]}</ConditionsItem>
                  <ConditionsItem>
                    Mileage: <Span>{makeComaInMileage(mileage)}</Span>
                  </ConditionsItem>
                  <ConditionsItem>
                    Price: <Span>{makeNumberFromPrice(rentalPrice)}$</Span>
                  </ConditionsItem>
                </ConditionsList>
              </DescriptListWrap>
            </Block>
        </ModalDescriptionWrap>
      </ModalCard>
      <Button
        width="168px"
        onClick={() => (window.location.href = 'tel:+380730000000')}
      >
        Rental car
      </Button>
    </ModalCarWrap>
  );
};
