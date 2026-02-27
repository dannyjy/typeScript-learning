class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

console.log(isCustomer(new Supplier()))