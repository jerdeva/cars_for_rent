import React, { useState, useEffect } from 'react';

export function Dropdown (){
  const [carBrands, setCarBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    fetch('/src/components/cars.json')
      .then(response => response.json())
      .then(data => setCarBrands(data))
      .catch(error => console.error('Error loading car brands:', error));
  }, []);

  const handleSelectChange = event => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div>
      <label htmlFor="carBrand">Car brand</label>
      <select id="carBrand" value={selectedBrand} onChange={handleSelectChange}>
        <option value="">Enter the text</option>
        {carBrands.map(car => (
          <option key={car.id} value={car.brand}>
            {car.brand}
          </option>
        ))}
      </select>
      {selectedBrand && <p>Выбрана марка: {selectedBrand}</p>}
    </div>
  );
};

export default Dropdown;
