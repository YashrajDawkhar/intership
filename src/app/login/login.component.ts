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
    email:new FormControl(''),
    password:new FormControl('')
  })

  loginData(){
    console.log(this.loginD.value);
    
    this.service.postLogin(this.loginD.value).subscribe((res:any)=>{
      localStorage.setItem("token",res.token)
      this.router.navigate(['/home'])
    })
  }
}
