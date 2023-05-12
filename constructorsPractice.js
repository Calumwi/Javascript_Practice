function Plan(name, price, space, transfer, pages, discountMonths){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    // this.calAnnual = function (percentIfDisc) {
    //     let bestPrice = this.price;
    //     let currDate = new Date();
    //     let theMo = currDate.getMonth();
    //     for (let i = 0; i< this.discountMonths.length; i++){
    //     if (this.discountMonths[i] === theMo) {
    //         bestPrice = this.price * percentIfDisc;
    //         break;
    //     }
    //     return bestPrice * 12;
    // }
    // console.log(bestPrice * 12); 
}
// }

// let test = new Plan("Calum", 3.99, "home", true, 500, [1, 3, 11])
// console.log(test.name);
// console.log(test.price);
// console.log(test.space);
// console.log(test.transfer);
// console.log(test.pages);
// console.log(test.discountMonths);


Plan.prototype.calcAnnual = function(percentIfDisc) {
    let bestPrice = this.price;
    let currDate = new Date();
    let theMo = currDate.getMonth();
    for (let i = 0; i < this.discountMonths.length; i++){
        if (this.discountMonths[i] === theMo) {
            bestPrice = this.price * percentIfDisc;
            break;
        }
    }
    return bestPrice * 12;
}

let test = new Plan("Calum", 3.99, "home", true, 500, [1, 3, 11]);
let disc = test.calcAnnual(10);
console.log(disc);
console.log('test');
