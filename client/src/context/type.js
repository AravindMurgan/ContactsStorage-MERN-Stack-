export const GET_CONTACTS = 'GET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const FILTER_CONTACTS = 'FILTER_CONTACTS';
export const CLEAR_CONTACTS = 'CLEAR_CONTACTS';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const CONTACT_ERROR = 'CONTACT_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

const contactState = (props)=>{
    const initialState = {
        contacts:[
            {
                id:1,
                name:'Aravind',
                email:'arvind@gmail.com',
                phone:'5454566566',
                type:'personal'
            },
            {
                id:2,
                name:'Ram',
                email:'Ram@gmail.com',
                phone:'123456789',
                type:'personal'
            },
            {
                id:3,
                name:'Jill Juk',
                email:'Jill@gmail.com',
                phone:'789456123',
                type:'proffesional'
            },
            {
                id:4,
                name:'Gandhi',
                email:'Gandhi@gmail.com',
                phone:'784512963',
                type:'proffesional'
            }
        ]
    }
}