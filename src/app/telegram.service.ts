
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Model } from './model';
import { Tag } from './tag';
import { postResult } from './postResult';


const URL='http://192.168.29.131:8081/'
let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    });
let options = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http:HttpClient) { }
  
  sendData(data:Model){
  	return this.http.post(URL,(data),options);
  }
  getData(){
  	return this.http.get(URL+'get');
  }
  getPhotos(url){
  	return this.http.get(URL+url+'.json');
  }
  sendDataDb(data:Model){
    return this.http.post(URL,(data),options);
  }
  getDataDb(){
    return this.http.get(URL+'update');
  }
  getHDPhoto =async function(obj){
  	var myHttp = this.http;
	return new Promise(async function(resolve, reject){
  	
  	myHttp.get(obj.postlink,{responseType: 'text'}).subscribe( (res:any )=>{
        var bigData = res;
     //   console.log("z"+res);
        var cutData=bigData.split('window._sharedData = ')[1].split(';')[0];
		var jsonx = JSON.parse(cutData);
		
		if(jsonx.entry_data.PostPage[0].graphql.shortcode_media.edge_sidecar_to_children=== undefined)
		{
		if(!jsonx.entry_data.PostPage[0].graphql.shortcode_media.is_video){
       	var img=jsonx.entry_data.PostPage[0].graphql.shortcode_media.display_resources;
		var postDate = new Date(jsonx.entry_data.PostPage[0].graphql.shortcode_media.taken_at_timestamp*1000);
		img = img[img.length-1];
		var thumb = jsonx.entry_data.PostPage[0].graphql.shortcode_media.display_resources[0];
		obj.corosel=0;
       	obj.normal=1;
       	obj.video=0;
       	obj.srcHD=img.src;
       	obj.width=img.config_width;
       	obj.postDate = postDate;
       	obj.height=img.config_height;
       	obj.src=thumb.src;
         }
         else{
       	//video
        var img=jsonx.entry_data.PostPage[0].graphql.shortcode_media;
		var postDate = new Date(jsonx.entry_data.PostPage[0].graphql.shortcode_media.taken_at_timestamp*1000);
		obj.postDate = postDate;
       	obj.corosel=0;
       	obj.normal=0;
       	obj.video=1;
       	obj.srcHD=img.video_url;
       	obj.src= img.thumbnail_src
       	obj.width=img.dimensions.width;

       	obj.height=img.dimensions.height;
        }
   	   }

		else if(jsonx.entry_data.PostPage[0].graphql.shortcode_media.edge_sidecar_to_children!== undefined)
		{
		if(!jsonx.entry_data.PostPage[0].graphql.shortcode_media.edge_sidecar_to_children.edges[0].node.is_video){
       	var img=jsonx.entry_data.PostPage[0].graphql.shortcode_media.edge_sidecar_to_children.edges[0].node.display_resources;
		var postDate = new Date(jsonx.entry_data.PostPage[0].graphql.shortcode_media.taken_at_timestamp*1000);

		console.log(jsonx.entry_data.PostPage[0].graphql.shortcode_media)
		obj.postDate = postDate;
    	var thumb = jsonx.entry_data.PostPage[0].graphql.shortcode_media.display_resources[0];
	   	img = img[img.length-1];
		obj.corosel=1;
       	obj.normal=0;
       	obj.video=0;
       	obj.srcHD=img.src;
       	obj.src=thumb.src;
       	obj.width=img.config_width;

       	obj.height=img.config_height;
       	//obj.srcset=srcset;
         }
   	   
       else{
       	//video......//not done yet
       	var small = bigData.split('<meta property="og:video" content="')[1];
       	var src = decodeURIComponent(small.split('"')[0]);
       	
       	obj.corosel=1;
       	obj.normal=0;
       	obj.video=1;
       	obj.videosrc=src;
       	small = bigData.split('<meta property="og:image" content=">')[1];
       	src = decodeURIComponent(small.split('"')[0]);
       	obj.src=src;
       
        }
       }
       resolve(obj);

  		})
  
	});
	}


}



