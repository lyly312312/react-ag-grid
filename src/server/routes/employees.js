var fs = require("fs");
var path = require("path");
var emp_filename = "./data/employees.json";
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var employees = {
  "data": [
        {
            "name": "Sushil Kumar",
            "country": "India",
            "designation": "Senior Associate",
            "domain": "Interactive"
        }, {
            "name": "Saurav Kumar",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "Interactive"
        }, {
            "name": "Pankaj Gupta",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "Java"
        }, {
            "name": "Akanksha Dwevedi",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "Data Stage"
        }, {
            "name": "Sachin Puri",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "QA"
        }, {
            "name": "Pulkit Tayal",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "Java"
        }, {
            "name": "Rahul Miglani",
            "country": "US",
            "designation": "Senior Associate",
            "domain": "AWS"
        }

    ]
};

router.route('/')
  .get(function(request, response) {
    fs.readFile(emp_filename, "utf-8", function(err, data){
  		try {
  			response.status(200).send(JSON.parse(data));
  		} catch(error){
  			console.log(error);
  			response.status(400).send("invalid data");
  		}
  	});
  })
  .post(parseUrlencoded, function(request, response) {
      var newEmployee = request.body;
      console.log(newEmployee);
      console.log(employees);
      employees[newEmployee.name] = newEmployee.description;
      console.log(employees);
      response.status(201).json(newEmployee.name);
  });

module.exports = router;
