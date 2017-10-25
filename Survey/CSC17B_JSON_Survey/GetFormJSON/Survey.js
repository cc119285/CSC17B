/*
 * Author:      Colleen Carleton
 * Date  :      Oct 6th, 2017
 * Purpose:     Survey class
 */

/* global i */

//Constructor for the Survey
function Survey(name,description,quesNum){
    //How many arguments are provided
    var nArgs=arguments.length;//The number of arguments passed to the function
    if(nArgs===0||nArgs>3){//Empty Survey
        this.name="";
        this.descrip="";
    }else if(nArgs===3){//Survey provided with all inputs
        this.name=name;
        this.descrip=description;
        this.num=quesNum;
    } else if(nArgs===2) {//Survey with first two inputs
        this.name=name;
        this.descrip=description;
    }else {
        this.name=name.name;
        this.descrip=description.descrip;
        this.num=quesNum.num;
    }
    
};

//Setting Survey name
Survey.prototype.setname=function(name) {
    this.name=name;
};

//Setting Survey description
Survey.prototype.setDesc=function(description) {
    this.descrip=description;
};

//Setting number of questions
Survey.prototype.setNum=function(quesNum) {
    this.num=quesNum;
};

Survey.start=function() {
    this.getJSON("Survey");
    this.print();
};

//Get survey from LocalStorage
Survey.getJSON=function(survey) {
    var storage=localStorage.getItem(survey);
    var object=JSON.parse(storage);
    var arry=Array();
    
    for(var i in object) {
        arry.push(object[i]);
    }
    for (var j=0; j<this.num; j++) {
        this.Question.push(new Question());
        this.Question[j].getJSON(arry[2][j]);
    }
};

//Serializing Survey
Survey.serialize=function() {
    var tempstr=this;
    var storage=JSON.stringify(this);
    localStorage.setItem(this.name,storage);
};

//Load results from LocalStorage
Survey.loadResults=function(info) {
    var storage=localStorage.getItem(this.name+"Results");
    var object=JSON.parse(storage);
    var infostr= new Array();
    Data=info.split();
    
    if (object===null) {
        for (var j=0; j<this.num; j++) {
            var surv= new Survey;
        }
        localStorage.setItem(this.name+"Results",JSON.stringify(infostr));
        storage=localStorage.getItem(this.name+"Results");
        object=JSON.parse(storage);
    }
    for (var i in this.num) {
        if (this.ans[i]===infostr[i]) {
            this.ans[i].val++;
        }
    }
    localStorage.setItem(this.name+"Results");
};

//Display Results of survey
Survey.displayResults=function() {
    var storage=localStorage.getItem(this.name+"Results");
    var object=JSON.parse(storage);
    var infostr= new Array();
    
    if (object===null) {
        document.write("No available results");
    } else {
        object=object+'';
        for (var count=0; count<this.Question.length; count++) {
            //output stored results
            document.write("<p>"+this.displayResults()+"<p>");
        }
    }
};

//Displaying the survey
Survey.prototype.print=function() {
    document.write("<p>"+this.name+"</p>");
    document.write("<p>"+this.descrip+"</p>");
    for (var i=0; i<this.num.length; i++) {
        this.Question[i].display();
    }
};

//Submit survey button/complete survey
Survey.complete=function() {
    document.getElementById("Survey").submit();
    this.loadResults("Survey");
    this.displayResults();
};