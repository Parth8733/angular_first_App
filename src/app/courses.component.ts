import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template:`
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of course">
            {{course}}
            </li>
        </ul>
        <img [src]="imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
     `
})
export class CoursesComponent {
    title = "List of Courses";
    imageUrl = "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/angular/tutorials/angular/6/img/03.png"
    colSpan = 2;
    course;
    

    constructor(service:CoursesService){
        this.course = service.getCourses();
    }

    //logic for calling an HTTP service
    // <h2[textContent] = "title"></h2> property binding
    
}