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
  public loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', [val.required]),
    password: this.fb.control('', [val.required])
  })


  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) private documentRef: Document

  ) { }

  ngOnInit(): void {
    this.documentRef.getElementById('preloader').className = 'hide';
  }

  public login(): void {
    this.documentRef.getElementById('preloader').className = 'content-spinner';
    this.router.navigate(['/main']);
  }

}

