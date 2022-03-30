const express = require('express');
const router = express.Router;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');

// load input validations
const validatorRegisterInput = require('../../validation/register');
const validatorLoginInput = require('../../validation/login');

//load user model
const User = require('../../models/User');

router.post('/register', (req,res) => {
    const {errors, isValid} = validatorRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
});
