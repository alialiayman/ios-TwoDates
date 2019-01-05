import { Component, OnInit } from "@angular/core";
import { DatePicker } from "tns-core-modules/ui/date-picker";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

    dateDifference: string;
    date1: Date;
    date2: Date;

    onDate1Changed(args) {
        let datePicker = <DatePicker>args.object;
        this.date1 = datePicker.date;
        this.CalculateDifference();
    }
    public daysString: string;
    CalculateDifference(): void {
        let difference = Math.abs(Math.round((this.date1.getTime() - this.date2.getTime()) / (1000 * 60 * 60 * 24)));
        this.daysString = difference + ' Day';
        let humanizedString: string = '';
        let years = difference / 365;
        if (years >= 1) {
            difference -= (parseInt(years.toString()) * 365);
            humanizedString += parseInt(years.toString()) + ' Year ';
        }
        let month = difference / 30;
        if (month >= 1) {
            difference -= (parseInt(month.toString()) * 30);
            humanizedString += parseInt(month.toString()) + ' Month ';
        }
        if (difference >= 1) {
            humanizedString += difference + ' Day';
        }
        this.dateDifference = humanizedString.trim();
    }
    onDate2Changed(args) {
        let datePicker = <DatePicker>args.object;
        this.date2 = datePicker.date;
        this.CalculateDifference();
    }
    onPicker1Loaded(args) {
        let datePicker = <DatePicker>args.object;
        this.date1 = new Date();
        datePicker.year = this.date1.getFullYear();
        datePicker.month = this.date1.getMonth() + 1;
        datePicker.day = this.date1.getDate();

    }
    onPicker2Loaded(args) {
        let datePicker = <DatePicker>args.object;
        this.date2 = new Date();
        datePicker.year = this.date2.getFullYear();
        datePicker.month = this.date2.getMonth() + 1;
        datePicker.day = this.date2.getDate();
    }
}