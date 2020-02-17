import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators as val } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', [val.required]),
    password: this.fb.control('', [val.required])
  })


  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) private documentRef: Document

  ) { }

  ngOnInit() {
    this.documentRef.getElementById('preloader').className = 'hide';
  }

  login() {
    this.documentRef.getElementById('preloader').className = 'content-spinner';
    this.router.navigate(['/main']);
  }

}

