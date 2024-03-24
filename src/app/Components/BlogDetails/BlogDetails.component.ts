import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../Model/IBlog';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';

@Component({
  selector: 'app-BlogDetails',
  templateUrl: './BlogDetails.component.html',
  styleUrls: ['./BlogDetails.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  Id: string = '';
  blog!: IBlog;
  comments: any[] = [];
  createAt:any[]=[];
  constructor(
    private route: ActivatedRoute,
    private ApiServe: ApiServiceService
  ) {
    this.Id = this.route.snapshot.params['id'];
    this.ApiServe.getBlogById(this.Id).subscribe({
      next: (res) => {
        this.blog = res.data;
        console.log(res.data);
      },
    });
    this.ApiServe.getCommentsByBlogId(this.Id).subscribe({
      next: (res) => {
        this.comments = res.data;
        
        console.log(res.data);
      },
    });
  }

  ngOnInit() {}
}
