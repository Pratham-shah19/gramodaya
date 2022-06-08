const express = require('express');
const chai = require('chai');
const request = require('supertest');
const { expect } = require('chai');

const app = express();

//test1- create report
describe('POST CREATE REPORT',()=>{
    it('SHOULD CREATE REPORT',()=>{
        request(app)
        .post('/reports')
        .send({})
        .expect(201)
    });
})

//test2- get report
describe('GET AGGREGATED REPORT',()=>{
    it('SHOULD SEND AGGREGATED REPORT',()=>{
        request(app)
        .get('/reports?reportID=923829')
        .send({})
        .expect(201)
    })
})