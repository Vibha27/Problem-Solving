/**
 * Return max count of order that can be fulfilled based on available widgets
 * @param {*} order array of value representing orders
 * @param {*} k integer value representing no.of widgets
 * @returns max order count that can be fulfilled by using widgets
 */
function filledOrders(order, k) {
    
    let maxOrder = 0;

    order.sort((a,b) => a-b); // sort order in ascending so that lower order value that can be fulfilled cannot be missed

    for (let count of order) {
        if (count <= k) { // order value is <= widgets then
            maxOrder += 1; // add its count and
            k -= count // remove that much order value from widgets
        } else {
            break; // break because all widgets are used
        }
    }

    return maxOrder
}

const order = [10,30,20];
const k = 40;
console.log(filledOrders(order,k))