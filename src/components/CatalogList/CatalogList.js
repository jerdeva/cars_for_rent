import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'components/redux/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'components/redux/selectors';
import { CarInfo } from 'components/CarInfo/CarInfo';
import { List, Container, BTN } from './CatalogList.styled';

export function CatalogList() {
  const selectedCars = useSelector(selectCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const [initialCarsCount, setInitialCarsCount] = useState(12);
  const [totalCarsCount, setTotalCarsCount] = useState(24);

  useEffect(() => {
    dispatch(fetchCars()).then(data => {
      setTotalCarsCount(data.length);
    });
  }, [dispatch]);

  const loadMore = () => {
    setInitialCarsCount(prevCount => prevCount + 12);
  };

  return (
    <Container>
      <List>
        {isLoading && !error ? (
          <p>Please wait...</p>
        ) : (
          selectedCars
            .slice(0, initialCarsCount)
            .map(
              ({
                id,
                year,
                make,
                model,
                type,
                img,
                description,
                fuelConsumption,
                engineSize,
                accessories,
                functionalities,
                rentalPrice,
                rentalCompany,
                address,
                rentalConditions,
                mileage,
              }) => (
                <CarInfo
                  key={id}
                  car={{
                    id,
                    year,
                    make,
                    model,
                    type,
                    img,
                    description,
                    fuelConsumption,
                    engineSize,
                    accessories,
                    functionalities,
                    rentalPrice,
                    rentalCompany,
                    address,
                    rentalConditions,
                    mileage,
                  }}
                />
              )
            )
        )}
      </List>
      <BTN onClick={loadMore}>Load more</BTN>
    </Container>
  );
}
