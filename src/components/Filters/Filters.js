import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectFilterCarBrands,
} from 'components/redux/selectors';
import Select from 'react-select';
import { carFilterSet, carFilterReset } from '../redux/carsSlice';
import {
  filterSelectCarBrandSet,
  filterSelectPriceSet,
  filterSelectKmFromSet,
  filterSelectKmToSet,
  filterReset,
} from '../redux/filter/filterSlice';
import { makeComaInMileage } from 'components/service/service';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  Form,
  Label,
  FalseInput,
  InputWrap,
  Input,
  WrapSecondInput,
  ButtonSearch,
  secondSelectStyles,
  firstSelectStyles,
} from './Filters.styled';

export const options = {
  svgSize: '42px',
  position: 'center-center',
  timeout: 5000,
};

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectFilterCarBrands);
  const filter = useSelector(selectFilter);

  const pricesArray = [{ value: 'all', label: 'All price' }];
  for (let index = 10; index < 501; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const onClickSearch = () => {
    if (
      (filter.selectedKmFrom.length > 0 &&
        filter.selectedKmFrom.length === 0) ||
      (filter.selectedKmTo.length === 0 && filter.selectedKmTo.length > 0)
    ) {
      Report.failure(
        'Failure',
        'Please fill in both search fields by car mileage',
        'Okay',
        options
      );
      return;
    }

    if (
      filter.selectedKmFrom !== '' &&
      filter.selectedKmTo !== '' &&
      parseInt(filter.selectedKmFrom) >= parseInt(filter.selectedKmTo)
    ) {
      Report.failure(
        'Failure',
        'Mileage "From" must be less than mileage "To"',
        'Okay',
        options
      );
      return;
    }

    dispatch(carFilterSet(filter));
  };

  const handleMiliageChange = e => {
    const { value } = e.target;

    switch (e.target.name) {
      case 'mileageFrom':
        dispatch(filterSelectKmFromSet(value));
        break;
      case 'mileageTo':
        dispatch(filterSelectKmToSet(value));
        break;
      default:
        break;
    }
  };


  const handleCarBrandChange = selectedOption => {
    dispatch(filterSelectCarBrandSet(selectedOption.value));
  };

  const handlePriceChange = selectedOption => {
    dispatch(filterSelectPriceSet(selectedOption.value));
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select
          onChange={handleCarBrandChange}
          options={carBrands}
          isSearchable
          placeholder="Enter the text"
          styles={firstSelectStyles}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          onChange={handlePriceChange}
          options={pricesArray}
          isSearchable
          placeholder=""
          styles={secondSelectStyles}
        />
      </Label>
      <InputWrap>
        <Label>
          Сar mileage / km
          <Input
            type="number"
            title="Only numbers. From 1 to 5 digits. Minimum value of 1 km"
            name="mileageFrom"
            onChange={handleMiliageChange}
            min="1"
            max="99998"
            $radius="14px 0px 0px 14px"
            $border="1px solid rgba(138, 138, 137, 0.20)"
          />
          <FalseInput>From</FalseInput>
        </Label>
        <WrapSecondInput>
          <Input
            type="number"
            title="Only numbers. From 1 to 5 digits. Minimum value of 1 km"
            name="mileageTo"
            onChange={handleMiliageChange}
            min="1"
            max="99998"
            $radius="0px 14px 14px 0px"
            $padding="14px 14px 14px 48px"
          />
          <FalseInput>To</FalseInput>
        </WrapSecondInput>
      </InputWrap>
      <ButtonSearch type="button" onClick={onClickSearch}>
        Search
      </ButtonSearch>
    </Form>
  );
};
