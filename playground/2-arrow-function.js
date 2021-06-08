// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const multiply = (x, y) => x * y;
// console.log(multiply(9, 3));
// console.log(square(3));

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
};

event.printGuestList();
