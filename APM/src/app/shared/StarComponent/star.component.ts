import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.style.css"]
})
export class StarComponent {
    @Input() rating: number = 0;

    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = (this.rating * 75) / 5;
    }

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The Rating ${this.rating} is clicked`);
         /* console.log(`The Rating ${this.rating} wa clicked`)
        ES 2015 back literals used which placing placedholder , can add properties */
    }
}