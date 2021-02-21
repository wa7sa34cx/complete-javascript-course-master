const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,

  bmiCalc: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,

  bmiCalc: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi
  }
}
mark.bmiCalc();
john.bmiCalc();

// console.log(mark);

if (john.bmi > mark.bmi) {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})!`);
} else {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})!`);
}