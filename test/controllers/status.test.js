﻿var _ = require("lodash");
var should = require("should");

var Status = require("../../models/status");
var StatusController = require("../../controllers/status");
var dbhelper = require("../../controllers/dbhelper");

describe("controllers/status", function ()
{
    before(function (done)
    {
        if (dbhelper.connected())
        {
            dbhelper.dropAllCollections(done);
        }
        else
        {
            dbhelper.connect(function (err)
            {
                should.not.exist(err);
                dbhelper.dropAllCollections(done);
            });
        }
    });
    
    describe("1.init", function ()
    {
        it("should create a new status: Zoro, 20150915, 20150910", function (done)
        {
            new Status({
                username : "Zoro",
                startDate : "20150909",
                endDate : "20150910"
            }).save(done);
        });
    });
    
    describe("2.findStatusByUsername", function ()
    {
        var username = "Zoro";
        it("should find the status of user: '" + username + "'", function (done)
        {
            StatusController.findStatusByUsername(username, function (err, doc)
            {
                should.not.exist(err);
                should.exist(doc);
                doc.username.should.equal(username);
                done();
            });
        });
        
        var wrongUsername = " ";
        it("should not find the status of user: '" + wrongUsername + "'", function (done)
        {
            StatusController.findStatusByUsername(wrongUsername, function (err, doc)
            {
                should.not.exist(doc);
                done();
            });
        });
    });
    
    describe("3.saveStatus", function ()
    {
        it("should save the status of: Zoro, , 20150910", function (done)
        {
            var status = {
                username: "Zoro",
                endDate: "20150910"
            };
            
            StatusController.saveStatus(status, function (err, doc)
            {
                should.not.exist(err);
                should.exist(doc);
                doc.username.should.equal(status.username);
                doc.endDate.should.equal(status.endDate);
                done();
            });
        });
    });
});