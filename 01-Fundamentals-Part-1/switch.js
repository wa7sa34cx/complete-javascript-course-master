const day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log("Programming");
    console.log("Go to Gym");
    break;
  case 'Tuesday':
    console.log("Reading book");
    break;
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log("Watch YouTube");
    break;
  case 'Saturday':
  case 'Sunday':
  default:
    console.log("Not a valid day");
}