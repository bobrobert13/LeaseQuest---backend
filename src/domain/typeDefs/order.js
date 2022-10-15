type Order{
    _id: ID
    orderNumber: Int
}

type Query {
    getOrders: [Order]
}