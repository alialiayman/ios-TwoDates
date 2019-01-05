"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.onDate1Changed = function (args) {
        var datePicker = args.object;
        this.date1 = datePicker.date;
        this.CalculateDifference();
    };
    ItemsComponent.prototype.CalculateDifference = function () {
        var difference = Math.abs(Math.round((this.date1.getTime() - this.date2.getTime()) / (1000 * 60 * 60 * 24)));
        this.daysString = difference + ' Day';
        var humanizedString = '';
        var years = difference / 365;
        if (years >= 1) {
            difference -= (parseInt(years.toString()) * 365);
            humanizedString += parseInt(years.toString()) + ' Year ';
        }
        var month = difference / 30;
        if (month >= 1) {
            difference -= (parseInt(month.toString()) * 30);
            humanizedString += parseInt(month.toString()) + ' Month ';
        }
        if (difference >= 1) {
            humanizedString += difference + ' Day';
        }
        this.dateDifference = humanizedString.trim();
    };
    ItemsComponent.prototype.onDate2Changed = function (args) {
        var datePicker = args.object;
        this.date2 = datePicker.date;
        this.CalculateDifference();
    };
    ItemsComponent.prototype.onPicker1Loaded = function (args) {
        var datePicker = args.object;
        this.date1 = new Date();
        datePicker.year = this.date1.getFullYear();
        datePicker.month = this.date1.getMonth() + 1;
        datePicker.day = this.date1.getDate();
    };
    ItemsComponent.prototype.onPicker2Loaded = function (args) {
        var datePicker = args.object;
        this.date2 = new Date();
        datePicker.year = this.date2.getFullYear();
        datePicker.month = this.date2.getMonth() + 1;
        datePicker.day = this.date2.getDate();
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
