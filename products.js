const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

// function 1 -- prolem 1
function getUniqueProducts(listOfProducts) {
  let obj = {};

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  var x = listOfProducts.map((el) => {
    if (el.productName == "TV") {
      c1++;
    } else if (el.productName == "AC") {
      c2++;
    } else if (el.productName == "FAN") {
      c3++;
    }
  });
  var n1 = listOfProducts[0].productName;
  var n2 = listOfProducts[1].productName;
  var n3 = listOfProducts[4].productName;
  obj[n1] = c1;
  obj[n2] = c2;
  obj[n3] = c3;
  return obj;
}
console.log(getUniqueProducts(listOfProducts));

// second problem statement  function 2
function getUniqueProductsName(listOfProducts) {
  const uniqueproducts = Object.values(
    listOfProducts.reduce((r, { productName, quantity, description }) => {
      r[productName] = r[productName] || { productName, description, total: 0 };
      r[productName].total += quantity;
      return r;
    }, {})
  );
  console.log(uniqueproducts);
}
console.log(getUniqueProductsName(listOfProducts));

/*
You have been given a list of products which is having property productName, quantity and description.

PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/
