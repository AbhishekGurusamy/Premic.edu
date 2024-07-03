import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommomServiceService } from 'src/app/service/commom-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  videourl:any

  constructor(private commonService: CommomServiceService){}

  ngOnInit(): void {
    this.getvideo()
  }

  getvideo(){
    let payload = new HttpParams().set('id', '8');

    this.commonService.getuploadedvideo(payload).subscribe((res: any) => {
        console.log(res['result']);
        this.videourl = res['result']
        this.videourl.forEach((element:any) => {
          // element.videoFile = `http://3.111.59.100:8000${element.videoFile}`
          element.videoFile = `http://127.0.0.1:8000${element.videoFile}`
        });
    });
  }

}
