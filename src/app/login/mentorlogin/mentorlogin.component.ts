import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit {
  

  constructor(private http:HttpClient) { }
  mentor_name="";
  pass_word="";
  error_message = ""; 

  ngOnInit() {
  }

  submit_form_data(){
    console.log("mentor_name : " + this.mentor_name);
    console.log("pass_word : " + this.pass_word);

    var body = "mentor_name=" + this.mentor_name 
        + "&pass_word=" + this.pass_word;
	
let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

this.http.post("http://localhost:3000/mentor/check", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        // localStorage.setItem('qualification', 'MCA');
        // localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
        if(result == 'Invalid User'){
          this.error_message = "Invalid User"
        } else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
          localStorage.setItem('token', result);
          //this.error_message = ""
          this.error_message = result
        }
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }
}
