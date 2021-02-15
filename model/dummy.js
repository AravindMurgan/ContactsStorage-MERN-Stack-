// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({msg: 'Contact not found'});

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({msg: 'Contact removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});