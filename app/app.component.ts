import {Component} from 'angular2/core';
import {ChallengesComponent} from './challenges.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `<h1>Typing Test</h1>
    <challenge></challenge>
    <authors></authors>`,
    directives: [ChallengesComponent, AuthorsComponent]
})
export class AppComponent { }