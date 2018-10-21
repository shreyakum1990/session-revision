import { Directive, OnInit, ElementRef, Renderer, Input } from "@angular/core";

@Directive ({selector : '[myhide]'})

export class MyHideDiretcive implements OnInit{
    @Input() myhide : boolean;
    constructor(private ele : ElementRef, private rend : Renderer){}
    ngOnInit() {
    //    this.rend.setElementStyle(this.ele.nativeElement,'display','none');
    console.log('the my hide status is', this.myhide);
    if(this.myhide){
        this.rend.setElementStyle(this.ele.nativeElement,'display','hidden');
    }
    }

}