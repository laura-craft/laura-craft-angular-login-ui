import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnURL: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {return this.form.controls;}

  onSubmit() {
    this.submitted = true;

    
  }

}
