const fs = require("fs");
const path = require("path")

module.exports =  ( () => {
    let types = '';
    let queries = ``;
    let mutations = ``;
    let subscriptions = ``;

    fs.readdirSync(__dirname)
    .filter( (file) => { 
        return (file.indexOf(".") !== 0) && (file !== 'index.js') && file.slice(-3) === '.js' })
        .forEach( (file) => {  
            let schema = path.join(__dirname, file);
            types = types + schema.types + '\n' ;
            queries = queries + schema.queries + '\n';
            mutations = mutations + schema.mutations + '\n';
            if ( schema.subscriptions ) {
                subscriptions = subscriptions + schema.subscriptions + '\n'
            }
        } )
    let subSubcriptions;

    if (subscriptions !== ``) {
        subscriptions = `
        type Subscriptions {
        ${subscriptions}
        }` 
        console.log("----Subscripciones Existentes ", subscriptions);
        subSubcriptions = `subscription: Subscription`;
    }
/*
    return gql`
        ${types}

        type Query {
            ${queries}
        }

        type Mutation {
            ${mutations}
        }

        # ${subscriptions}

     schema {
      query: Query,
      mutation: Mutation,
      ${subsSchema || ''}
        }
    ` */
})()