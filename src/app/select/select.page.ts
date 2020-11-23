import { Component, OnInit , ViewChildren,ElementRef, Directive} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelegramService} from '../telegram.service';
import { Observable,throwError } from 'rxjs';
import { Photo } from '../photo';



@Component({
  selector: 'app-frame',
})
export class FrameComponent {

}




@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  public id:string;
  public cursor=0;
  public frame:Photo;
 
  public frame2:Photo;
  public photos:Photo[];
  @ViewChildren('swipe') card;
  public like=false;
  constructor(private activatedRoute:ActivatedRoute,private telegramService:TelegramService) { 
  	
  }
  deg:any;
  frames:Photo[]
 
  ngOnInit() {
  	this.frames=[];
  	 this.id = this.activatedRoute.snapshot.paramMap.get('id');
  	 this.telegramService.getPhotos(this.id).subscribe((x:Photo[])=>{
    this.photos=(x);
    this.frame=this.photos[0];
    this.frame2=this.photos[1];
    if(this.photos.length>=1)
   	this.getHD(this.photos[0],0); 
   if(this.photos.length>=2)
   {
   	this.getHD(this.photos[1],1);
   	
   }
   if(this.photos.length>=3)
   	{this.getHD(this.photos[2],2);
   	
  	}
  	});
   
  }
  
  getHD(obj,i){
  	this.telegramService.getHDPhoto(obj).then((x:Photo)=>{
  		this.photos[i]=x;
  		this.frames.push(this.photos[i]);
  	});
  }
  checking(e){
  	console.log(e);
  	this.nextFrame();
  }
  nextFrame(){
  	this.cursor++;
  	if(this.cursor<this.photos.length)
  	this.frame= this.photos[this.cursor];
  	if((this.cursor+2)<this.photos.length){
   	this.getHD(this.photos[this.cursor+2],this.cursor+2);

   	if(this.frame.src=="" && this.cursor<this.photos.length){
   		this.nextFrame();
   	}
  	}
  }
 
}
