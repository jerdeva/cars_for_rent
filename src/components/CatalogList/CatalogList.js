import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'components/redux/operations';
import { selectCars, selectError, selectIsLoading } from 'components/redux/selectors';
import { CarInfo } from 'components/CarInfo/CarInfo';
import { List } from './CatalogList.styled';


export function CatalogList() {
    const selectedCars = useSelector(selectCars);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

      const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch])



    return (
      <List>
        {isLoading && !error ? (
          <p>please waite</p>
        ) : selectedCars.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your contacts.</p>
        ) : (
          selectedCars.map(
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
    );
}