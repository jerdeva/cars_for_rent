import {
  Item,
  Photo,
  BTN,
  CarCard,
  ImgWrap,
  Heart,
  DescriptionWrap,
  TitleWrap,
  TitleH3,
  DescriptListWrap,
  Span,
  DescriptList,
  DescriptItem,
} from './CarInfo.styled';
import heartClear from '../icons/heartClear.svg';
import React, { useState } from 'react';
import { Modal } from 'components/ModalLearnMore/Modal';
import { ModalInfo } from 'components/ModalLearnMore/ModalInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from 'components/redux/selectors';
import { useEffect } from 'react';
import {
  deleteFavoriteCar,
  addFavoriteCar,
} from 'components/redux/favoriteCarsSlice/favoriteCarsSlice';

export function CarInfo({ car, index }) {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some(car => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };


  return (
    <Item key={id}>
      {showModal && (
        <Modal onClick={toggleModal}>
          <ModalInfo car={car} key={id} />
        </Modal>
      )}
      <CarCard>
        <ImgWrap>
          <Photo src={img} alt="car" />
          <Heart
            src={heartClear}
            alt="heart"
            onClick={onClickHeart}
            fill={isCarFavorite ? 'var(--color-button)' : 'none'}
            stroke={
              isCarFavorite
                ? 'var(--color-button)'
                : 'var(--color-text-button-and-back)'
            }
          />
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <TitleH3>
              {make}
              {index < 3 && <Span> {model}</Span>}, {year}
            </TitleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap height="36px">
            <DescriptList>
              <DescriptItem>{cityCountry[0]}</DescriptItem>
              <DescriptItem>{cityCountry[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
              <DescriptItem>Premium</DescriptItem>
            </DescriptList>
            <DescriptList>
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem>
                {index === 10 ? make : index === 0 || index > 4 ? model : make}
              </DescriptItem>
              <DescriptItem>{id}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <BTN onClick={toggleModal}>Learn more</BTN>
    </Item>
  );
}
