import React from 'react';



 const ContactItem = ({contacts}) => {
    const {id,name,mail,phone,type} = contacts;

    return (
        <div className='card bg-light' style={{borderRadius:'5px'}}>
            <h3 className="text-primary text-left">
            {name}{'  '}  
            <span  className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')} >{type}</span>
            </h3>
        </div>
    )
}

export default ContactItem;
