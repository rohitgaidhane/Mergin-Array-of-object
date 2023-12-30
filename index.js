let arr = [
  { name: "user1", age: 28, isVerified: true }, // arr[0] i =0
  { name: "user2", age: 25, isVerified: false }, // arr[1]
  { name: "user3", age: 38, isVerified: true }, // arr[2]
  { name: "user4", age: 25, isVerified: true }, // arr[3]
];

let arr1 = [
  { name: "user2", address: "New Hanuman Nagar Haweli" }, // arr[0]
  { name: "user3", address: "Loha Pull Nagpur" }, // arr[1]
  { name: "user1", address: "New Civil line Road,Delhi" }, // arr[2]
  { name: "user4", address: "Vashi Navi Mumbai" }, // arr[3]
];

// let obj =   { name: "user1", age: 28, isVerified: true ,address:"New Civil line Road,Delhi"}
// obj["address"] ="New Civil line Road,Delhi";

function mergingArray() {
  let tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    //for arr

    for (let j = 0; j < arr1.length; j++) {
      //for arr1

      if (arr[i].name === arr1[j].name) {
        // arr[i]["address"] = arr1[j].address;
        let obj = arr[i];
        obj["address"]=arr1[j].address;
        tempArray.push(obj)

      }
    }
  }
  return tempArray;
  
}

console.log(mergingArray());