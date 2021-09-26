const { v4: uuidv4 } = require('uuid');

const carsDb = [
  {
    id: uuidv4(),
    name: 'KIA',
    model: 'Sportage',
    manufacturedYear: 2020,
  },
  {
    id: uuidv4(),
    name: 'KIA',
    model: 'Ceed',
    manufacturedYear: 2010,
  },
  {
    id: uuidv4(),
    name: 'Toyota',
    model: 'RAV',
    manufacturedYear: 2020,
  },
];

module.exports.getCars = (req, res) => {
  res.status(200).send(carsDb);
};

module.exports.addCar = (req, res) => {
  const { body } = req;
  //   console.log(`body`, body);
  const newCar = { id: uuidv4(), ...body };
  carsDb.push(newCar);

  if (newCar) {
    res.status(201).send(newCar);
  } else {
    res.status(404).send('Car not added');
  }
};

module.exports.deleteCar = (req, res) => {
  const {
    params: { carId },
  } = req;

  const deletedCarIndex = carsDb.findIndex(c => c.id == carId);
  const [deletedCar] = carsDb.splice(deletedCarIndex, 1);

  if (deletedCar) {
    res.status(200).send(deletedCar);
  } else {
    res.status(404).send("Car doesn'n exist in DB");
  }
};
