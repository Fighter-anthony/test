import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController} from '@ionic/angular';

import { TelegramService} from '../telegram.service';
import { Observable,throwError } from 'rxjs';
import { Model } from '../model';
import { Tag } from '../tag';
import { postResult } from '../postResult';
import {SelectPage } from '../select/select.page'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

 private data:Model;
  private done=false;
  private message:string;
  public fancy:any;
  constructor(private telegramService:TelegramService,  private activatedRoute: ActivatedRoute,public navcontroller:NavController)
 {
    this.fancy=SelectPage;

  }
  btnClick(){
  	this.sendRequest(this.data);
  }
  btnEdit(){
    this.updateRequest(this.data);
  }
  sendRequest(data){
  	this.telegramService.sendData(this.data).subscribe((x: postResult)=>{
      this.done=(x.done==1);
     this.message='Gaveesh';
      
    });
  }
  updateRequest(data){
    this.telegramService.getData().subscribe((x:Model[])=>{
      this.done=false;
      //this.message=x.name;
    });
  }

  public folder: string;
  public list: Model[];
  public filterlist: Model[];


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.telegramService.getData().subscribe((x:Model[])=>{
    this.list=x;
    for (var i = this.list.length - 1; i >= 0; i--) {
      	this.list[i].dp= decodeURIComponent(this.list[i].dp);
      	if(this.list[i].updated>0){
      		var today = new Date();
      		var that = new Date(this.list[i].lastupdated);
            this.list[i].datestr=this.getTime(today,that);
            if(this.list[i].lastTen== undefined){
      			this.list[i].lastTen=[];
      		}
        }
    }
  	});
  }
  public getTime(today:Date,that:Date){
  var Difference_In_Time = today.getTime() - that.getTime(); 
        var Difference_In_Days =Math.floor( (Difference_In_Time) / (1000 * 3600 * 24));

        var Difference_In_Hours =Math.floor( (Difference_In_Time / (1000 * 3600)));
        var Difference_In_Minutes =Math.floor( (Difference_In_Time / (1000 * 60)));
        var datestr;
        if(Difference_In_Days>0)
        datestr = Difference_In_Days+" Days Ago"; 
          else if(Difference_In_Hours>0)
        datestr = Difference_In_Hours+" Hours Ago"; 
          else if(Difference_In_Minutes>0)
        datestr = Difference_In_Minutes+" minute Ago"; 
        else
        datestr='Just Now';
        return datestr;
}
public segment:string
public lists={ Updated:[],Selected:[],Newbies:[] }
 segmentChanged(ev: any) {
  //  console.log('Segment changed', ev);
  this.segment=ev.detail.value;
    if(ev.detail.value=='Updated'){
    	this.filterlist = this.list.filter(x=>{ return(x.updated>0); })

    }

    if(ev.detail.value=='Selected'){
    	this.filterlist = this.list.filter(x=>{ return(x.selected>0); })
    	
    }

    if(ev.detail.value=='Newbies'){
    	this.filterlist = this.list.filter(x=>{ return(x.updated<=0); })
    	
    }
    this.lists[this.segment]= this.filterlist;
  }
  search(ev: any) {
  //	 console.log('Segment changed', ev);
  var key = ev.detail.value;
  this.filterlist = this.lists[this.segment].filter(x=>{ return (x.username.indexOf(key)>=0);  })
  }
  gotoSelect(username:string){
  	//alert(username);
  this.navcontroller.navigateRoot('/select/'+username);


  }
 
}

