import { Component } from '@angular/core'
import debounce from 'debounce'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Welcome'
  atTop = true

  ngOnInit() {
    window.onscroll = debounce(event => {
      this.atTop = !(window.pageYOffset || document.documentElement.scrollTop)
    }, 15)
  }
}
