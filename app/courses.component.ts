import { Component } from 'angular2/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'
import { FocusModule } from 'angular2-focus';

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{title}}<br>
    {{wordTest}}<br>
    <input type="text" autofocus (keyup)="onKeyUp($event)" autoGrow />
    Preview: {{inputVal}}
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})


export class CoursesComponent {
    title = "The title of courses page";
    wordTest = "Can you type this?";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();

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
}