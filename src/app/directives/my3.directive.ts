import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive ({selector : '[myloop]'})

export class MyLoop{
    constructor(private temp : TemplateRef<number>, private cont : ViewContainerRef){}
    @Input() set myloop(n:number){
        console.log('The n is',n);
        for(let i=1; i<n; i++){
            this.cont.createEmbeddedView(this.temp)
        }
    }
}