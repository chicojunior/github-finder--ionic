import { Component, ViewChild } from '@angular/core';

import { HomeService } from '../shared/home.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  username: string
  user: any
  loading: boolean = false
  
  constructor(private _service: HomeService) {}
  
  getGithubUser() {
    this.loading = true
    this._service
      .getUserByName(this.username)
      .subscribe(
        res => {
          this.loading = false
          this.user = res
          console.log(res)
        },
        err => {
          this.loading = false
          console.error(err)
        }
      )
  }

}
