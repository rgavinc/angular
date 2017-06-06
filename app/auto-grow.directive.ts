import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    _el: ElementRef;
    constructor(private el: ElementRef, private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
        this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'all 0.5s');
        
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
        this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'all 0.5s');
    }
}