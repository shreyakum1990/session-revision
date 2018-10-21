import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive ({selector : '[myif]'})

export class MyIfDirective implements OnInit{

    @Input() set myif (stt : boolean){
        if (stt){
            console.log("true")
        }
        else{
            this.container.createEmbeddedView(this.temp)
        }
    }

    constructor(private container : ViewContainerRef, private temp : TemplateRef<any>){}
    ngOnInit() {
        
    }

}