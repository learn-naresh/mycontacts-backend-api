const {asyncHandler} = require("express-async-handler")
//@desc Get all Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler (async (req , res) =>{
    res.status(200).json({message: 'Get all contacts'});
})

//@desc create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler ( async (req , res) =>{
    console.log(req.body)

    const {name, email, phone} = req.body

    if (!name || !email || !phone){
        res.status(404)
        throw Error("All fields are required")
    }

    res.status(201).json({message: 'create contacts'});
})

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler ( async (req , res) =>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})

//@desc Put Update Contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler ( async (req , res) =>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler ( async (req , res) =>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}