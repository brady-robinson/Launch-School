// function createPerson(firstName, lastName = '') {
//   let person = {};
//   person.firstName = firstName;
//   person.lastName = lastName;

//   person.fullName = function() {
//     return `${this.firstName} ${this.lastName}`.trim();
//   };

//   return person;
// }

// function createPerson(firstName, lastName = '') {
//   return{
//     firstName: firstName,
//     lastName: lastName,
//     fullName() {
//       return `${this.firstName} ${this.lastName}`.trim();
//     }
//   };
// }

// let john = createPerson('John', 'Doe');
// let jane = createPerson('Jane');

// console.log(john.fullName());
// console.log(jane.fullName());

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

function createInvoice(services={}) {
  if (services.phone === undefined) {
    services.phone = 3000
  }
  
  if (services.internet === undefined) {
    services.internet = 5500
  }

  return {
    phone: services.phone,
    internet: services.internet,
    payments: 0,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.payments += payment.total();
    },
    addPayments(payArray) {
      this.payments += payArray.reduce((tot, payment) => tot + payment.total(), 0);
    },
    amountDue() {
      return (this.phone + this.internet) - this.payments
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000





function createPayment(services = {}) {
  // implement the factory function here
  if (services.phone === undefined) {
    services.phone = 0;
  }
  if (services.internet === undefined) {
    services.internet = 0;
  }
  if (services.amount === undefined) {
    services.amount = 0;
  }

  return {
    phone: services.phone,
    internet: services.internet,
    amount: services.amount,

    total() {
      return this.phone + this.internet + this.amount;
    }

  }
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
