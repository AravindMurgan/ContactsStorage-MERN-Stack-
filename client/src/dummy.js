<Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(contact => (
               
                  <ContactItem contact={contact} />
              ))
            : contacts.map(contact => (

                  <ContactItem contact={contact} />
              
              ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>