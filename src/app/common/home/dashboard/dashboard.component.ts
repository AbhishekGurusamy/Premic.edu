import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommomServiceService } from 'src/app/service/commom-service.service';
import { ToastService } from 'src/app/service/toast.service';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isAdmin:boolean = true
  videourl:any = []
  videolink:string=''

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  
  uploadvideoForm:any = new FormGroup({
    title: new FormControl(null,Validators.required),
    description: new FormControl(null, Validators.required),
    videofile : new FormControl(null, Validators.required)

  })

  userList:any = {}
  selectedFile: File | null | any = new File([],'');

  button = {
    type:'upload'
  }
  isLoading:boolean = false

  constructor(private commonService:CommomServiceService, private toast:ToastService){}

  ngOnInit(): void {
    this.getAllUserList()
    this.getvideo()
  }

  register(){
    let payload = {
      "username":this.registerForm.value['email'],
      "password": this.registerForm.value['password']
    }

    this.commonService.registerApi(payload).subscribe((response)=>{
      this.toast.success("New user created successfuly")
      this.registerForm.reset()
      this.getAllUserList()
    },(error:any)=>{
      this.toast.error(error.error['username'][0])
    })
    
  }

  onFileSelected(event: any): void {
    this.selectedFile = <File>event.target.files[0];
  }

  getAllUserList(){
      this.commonService.userList().subscribe((response)=>{
        this.userList = response
      })
  }

  uploadvideo(){
    if(this.uploadvideoForm.valid){
      this.isLoading = true
      let payload = new FormData()
      payload.append('title', this.uploadvideoForm.value['title'])
      payload.append('description', this.uploadvideoForm.value['description'])
      payload.append('videoFile', this.selectedFile, this.selectedFile.name)
  
      this.commonService.uploadvideo(payload).subscribe((response)=>{
        this.isLoading = false
        this.toast.success('Uploaded Successfully')
        this.selectedFile = null
        this.uploadvideoForm.reset()
        console.log(this.uploadvideoForm)
        this.getvideo()
      }, (error:any)=>{
        this.toast.error('Error in uploading video')
        this.isLoading = false
      })
    } else {
      this.toast.warning('Please upload video')
    }
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

  editVideo(id:number){
    let video = this.videourl.find((videoId:any)=> videoId.id === id)
    this.uploadvideoForm.patchValue(video)
    this.button.type = 'edit'
  }

  deleteVideo(id:number){
    let payload = new HttpParams().set('id', id);
    this.commonService.deletevideo(payload).subscribe((response)=>{
      this.getvideo()
      this.toast.success('Deleted Successfully')
    })
  }

}
