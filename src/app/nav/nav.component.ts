import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }

  onSubmit(f) {
    console.log('param : ' + f)
    location.reload();
    this.router.navigate(['search/' + f.value.search])
      .then(() => {
        window.location.reload();
      });
  }

  ngOnInit() {
  }

}
