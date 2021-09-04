import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:BackendService ,private router:Router) { }

  ngOnInit(): void {
  }

  loginD = new FormGroup({
    email: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  
  })

  loginData(){
    console.log(this.loginD.value);
    
    // this.service.postLogin(this.login.value).subscribe(res=>{
    //   console.log(res);
    //   this.router.navigate(['/register'])
    // })
  }
}
