import { Directive,ElementRef,HostListener , Output ,EventEmitter } from '@angular/core';
import {Gesture, GestureController} from '@ionic/angular';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {
  private check=true;

  constructor(private elementRef:ElementRef, private gesCtrl:GestureController) { }

  @Output() swiped= new EventEmitter<Number>();

  ngAfterViewInit(){
  		 const gesture = this.gesCtrl.create({
      el: this.elementRef.nativeElement,
      gestureName: 'my-gesture',
      onMove: (detail) => { this.onMove(detail); }
  })

  gesture.enable();
// console.log(this.elementRef);
  }
  	

   private onMove(detail) {
	const type = detail.type;
	const currentX = detail.currentX;
	const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
    var deg = Math.atan(deltaX/(500.0-detail.currentY))*180.00/Math.PI*0.5;
    this.elementRef.nativeElement.style.webkitTransform="rotate("+(deg)+"deg)";
 	if(deltaX>0)
  	this.elementRef.nativeElement.style.webkitTransformOrigin="50% 600px"
 	if(deltaX<0)
  	this.elementRef.nativeElement.style.webkitTransformOrigin="50% 600px"
	if((deg>30 || deg<-30) && this.check){
		this.check=false;
		this.elementRef.nativeElement.style.display="none";
		if(deg>30)
		this.swiped.emit(1);
	    if(deg<-30)
		this.swiped.emit(-1);
	}
	var opacity = (Math.abs(deg)/30.0);
	this.elementRef.nativeElement.style.opacity=(1-opacity);
	}
	
	@HostListener('touchend') touchend(){
	this.elementRef.nativeElement.style.webkitTransform="rotate("+(0)+"deg)";
	this.elementRef.nativeElement.style.opacity=(1);
	this.elementRef.nativeElement.style.zIndex=0;
	//this.elementRef.nativeElement.style.display='block';


 	}
}
