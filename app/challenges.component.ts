import { Component } from 'angular2/core'
import { ChallengeService } from './challenge.service'
import { AutoGrowDirective } from './auto-grow.directive'
import { FocusModule } from 'angular2-focus';

@Component({
    selector: 'challenge',
    template: `
    <h2>Choose your challenge</h2>
    {{title}}<br>
    {{wordTest}}<br>
    <input type="text" autofocus (keyup)="onKeyUp($event)" autoGrow />
    <section>
        <div class="challenge choose" *ngFor="#challenge of challenges" (click)="onClick($event)" id={{challenge}}></div>
    </section>
    `,
    providers: [ChallengeService],
    directives: [AutoGrowDirective]
})


export class ChallengesComponent {
    title = "The title of challenges page";
    wordTest = "Can you type this?";
    challenges;

    constructor(challengeService: ChallengeService) {
        this.challenges = challengeService.getChallenges();

    }

    onKeyUp($event) {
        let target = $event.target;
        target.focus();
        let input = $event.target.value;
        let stringSize = input.length;
        if (input.substring(0, stringSize) === this.wordTest.substring(0, stringSize)) {
            if (!target.classList.contains('good-input')){
                target.classList.remove('bad-input');
                target.classList.add('good-input');
            }
        } else {
            if (!target.classList.contains('bad-input'))
                target.classList.remove('good-input');
                target.classList.add('bad-input');
        }
    }

    onClick($event) {
        let target = $event.target;
        target.classList.remove("choose");
        let unwanted = document.querySelectorAll(".challenge:not(:hover)");
        for (let i = 0; i < unwanted.length;i++){
            unwanted[i].style.height = 0;
            unwanted[i].style.width = 0;
            unwanted[i].style.border = 0;
            unwanted[i].style.margin = 0;

        }

        }
    }