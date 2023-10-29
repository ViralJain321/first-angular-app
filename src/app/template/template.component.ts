import { Component } from '@angular/core';

@Component({
    selector: 'app-template',
    template: `
    <h1>Helo Angular</h1>
    <p>Tia is a text.</p>
    `,
    styles: [
        `
        h1{
            color : blue
        }
        p{
            color : red
        }
        `
    ]

})

export class TemplateComponent {};