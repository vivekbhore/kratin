
const customersReducer = (state =[],action) =>{
    switch(action.type) {
        case 'SET_CUSTOMERS': return [].concat(state,action.payload)

        case 'REMOVE_CUSTOMER': {
            return state.filter(customer=>{
                return customer._id!== action.payload._id
            })
        }
        case 'ADD_CUSTOMER': return [...state,action.payload]

        case 'EDIT_CUSTOMER': return state.map(customer => {
            if(customer._id === action.payload._id) {
                return Object.assign({},customer,action.payload)
            } else {
                return Object.assign({},customer)
            }
        })
        case 'SET_SUB_CUSTOMERS':return [].concat(state,action.payload)

        default : return [...state]
    }
}
export default customersReducer
