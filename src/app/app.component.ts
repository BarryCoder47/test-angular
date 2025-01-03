import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSignalComponent } from "./test-signal/test-signal.component";


@Component({
    selector: 'app-root',
    standalone : true,
    imports: [RouterOutlet, TestSignalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

}
