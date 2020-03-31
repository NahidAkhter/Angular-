import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <h2>{{title}}</h2>
                <h2 [textContent] = "title"></h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course}}
                    </li>
                </ul>
                <img [src] = "imageUrl"/>
            <table>
                <tr>
                    <td [attr.colspan] = "colSpan"></td>
                </tr>
            </table>
            <button type="button" class="btn btn-primary" [class.active]= "isActive">save</button><br><br>
            <button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'blue' : 'green'">Save</button><br><br>
            <div (click)="onDivClicked()">
            <button (click)="onSave($event)">onSave</button>
            </div>
            <br>
            <input #email (keyup.enter)="onKeyUp(email.value)"/> <br><br>
            <input [value]="name" (keyup.enter)="name = $event.target.value; onKeyUpName()"/> <br><br>
            <input [(ngModel)]="name" (keyup.enter)="onKeyUpName()"/><br>
            {{course.title | uppercase}} <br/>
            {{course.rating | number:'2.1-2'}} <br/>
            {{course.students | number}} <br/>
            {{course.price | currency:'AUD':true:'3.1-2'}} <br/>
            {{course.releaseDate | date:'shortDate'}} <br/> <br/>
            `
})

export class CoursesComponent {

    title = "List of Courses";
    courses;
    colSpan = 10;
    isActive = true;
    name = "me@example.com";
    imageUrl = "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg";
    constructor(service: CourseService) {
        this.courses = service.getCourses();
    }

    onKeyUpName(){
       console.log(this.name);
    }

    onDivClicked(){
        console.log("ondiv was Clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("button was clicked", $event);
    }
    onKeyUp(email){
        console.log("enter was pressed", email);
    }

    course = {
        title: "The Complete Angular",
        rating: 4.9516,
        students: 30125,
        price: 190.98,
        releaseDate: new Date(2016, 3, 1)

    }

}