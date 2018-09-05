import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validNumber,validGender,validDiabeticStatus} from './helperfunctions/form-fields-validators';
/*
First declare list of countries and the cities in them. In db schema, this would be

Countries
||
  Cities

*/

const countries=[

		{

			"country_name":"Rwanda",

		},

		{

		 "country_name":"Eritrea"

		}

]





//list of cities, joined by country_id key to countries
const cities=[


		{
			"city_id":1,
			"city_name":"Kigali",
			"country_name":"Rwanda"
		},
		{
			"city_id":2,
			"city_name":"Musanze",
			"country_name":"Rwanda"
		},
		{
			"city_id":3,
			"city_name":"Asmara",
			"country_name":"Eritrea"
		}



]



//Interface that stores medical records. Note city and country are numbers that refer to the locations structure above
export interface IntfRecrds {
  first_name:string;
  last_name:string;
  gender:string;
  age:number;
  city:string;
  country:string;
  diabetic:string;

};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	rForm: FormGroup; //record entering form
	medical_records:IntfRecrds[]=[]; //an array that contains list of already added list of medical records
	countries_list:any[]=countries; //list of countries populated on intialtization
	cities_of_country:any[]=[];//list of cities populated when a country is selected


  constructor(private formBuilder: FormBuilder) {
   //build the form now
   this.rForm = this.formBuilder.group({


            'first_name':[null,[Validators.required]],
			'last_name':[null,[Validators.required]],
			'gender':[null,[Validators.required]],
            'age':[null,[Validators.required,validNumber('int','')]], //must be an integer
            'city':[null,[Validators.required]],
            'country':[null,[Validators.required]],
            'diabetic':[null,[Validators.required,validDiabeticStatus]],
        });


  }


  filterMedicalRecords(only_minors:number){
  	/*

  	filter medical records to show minors or not

  	*/

  	let records:IntfRecrds[]=[];

   if(only_minors==1){
   	//get underage only

  	records=this.medical_records.filter(function(record){

  		return records['age']<18;
  	});

  }


  }


  eventCountryCities(country_name){
  	/*
  	Get list of cities of the given country
  	*/

  	this.cities_of_country=[];



  	this.cities_of_country= cities.filter(function(city){
    return city.country_name ==country_name;
     });



}



    handleSaveNewRecord(post) {
    /*
    Save new medical record.

    @input post: post is a dictionary containing the values of the form that is just being submitted. Process the content here

    If it is successfully added, then save it to medical_records

    The validation on the creation of the form is adequate enough since the form can't be sumbitted with enabled submit button. However,

    you can still validate it here and most importantly, the server side.

    */


    //add the record
    this.medical_records.push({
    	'first_name':post.first_name.trim,
    	'last_name':post.last_name.trim,
    	'gender':post.gender,
    	'age':post.gender,
    	'city':post.city,
    	'country':post.country,
    	'diabetic':post.diabetic

    });

    //reached here: record added. so clear the form so the user can add again
    this.rForm.reset();





  }


  ngOnInit() {



  }

}
