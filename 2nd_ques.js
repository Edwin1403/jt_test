class CarServiceStation {
    constructor() {
      this.services = {
        BS01: {
          name: 'Basic Servicing',
          prices: {
            Hatchback: 2000,
            Sedan: 4000,
            SUV: 5000
          }
        },
        EF01: {
          name: 'Engine Fixing',
          prices: {
            Hatchback: 5000,
            Sedan: 8000,
            SUV: 10000
          }
        },
        CF01: {
          name: 'Clutch Fixing',
          prices: {
            Hatchback: 2000,
            Sedan: 4000,
            SUV: 6000
          }
        },
        BF01: {
          name: 'Brake Fixing',
          prices: {
            Hatchback: 1000,
            Sedan: 1500,
            SUV: 2500
          }
        },
        GF01: {
          name: 'Gear Fixing',
          prices: {
            Hatchback: 3000,
            Sedan: 6000,
            SUV: 8000
          }
        }
      };
    }
  
    calculateTotalBill(carType, serviceCodes) {
      let totalBill = 0;
      let serviceDetails = '';
  
      serviceCodes.forEach(serviceCode => {
        const service = this.services[serviceCode];
        const price = service.prices[carType];
        totalBill += price;
        serviceDetails += `${service.name} - ₹ ${price}\n`;
      });
  
      if (totalBill > 10000) {
        serviceDetails += 'Complimentary Cleaning - ₹ 0\n';
      }
  
      serviceDetails += `Total Bill - ₹ ${totalBill}`;
  
      return serviceDetails;
    }
  }
  
  const carServiceStation = new CarServiceStation();
  const carType = 'Sedan';
  const serviceCodes = ['BS01', 'EF01'];
  
  
  const serviceDetails = carServiceStation.calculateTotalBill(carType, serviceCodes);
  console.log(serviceDetails);