const lemonade = (customers) => {
  // set-up drawer
  let drawer = {5: 0, 10: 0, 20: 0};
  // initialize change due
  let changeDue;
  //go through customer by customer
  for (let i = 0; i < customers.length; i++) {
    // calculate change due
    changeDue = customers[i] - 5;
    // add money from transaction to drawer
    drawer[customers[i]] += 1;
    // if change due determine right 
    // bills to provide change
    if (changeDue) {
      // if there aren't any fives
      // not possible to provide change
      if (!drawer[5])
        return false;
      // if there are fives provide change
      // and reduce the numers of fives in the drawer
      drawer[5] -= 1;
      // if the change due is $15
      if (changeDue === 15) {
        // if there aren't any tens
        // not possible to provide change
        if (!drawer[10])
          return false;
      // if there are tens provide change
      // and reduce the numers of tens in the drawer
        drawer[10] -= 1;
      }
    }
  }
  // always had enough change
  return true;
}
const customers = [5, 5, 5, 10, 20];

document.getElementById('ans').textContent = lemonade(customers);