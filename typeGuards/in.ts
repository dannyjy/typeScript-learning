class Customer {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}

console.log(signContract(new Customer))
console.log(signContract(new Supplier))