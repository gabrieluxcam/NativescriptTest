import { Component, OnInit } from "@angular/core";
import { NSUXCam } from "nativescript-uxcam";

var config = {
    userAppKey: "wws9fqfncvv8h7f",
};

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        console.log("====================================");
        console.log("running this");
        console.log(config);
        console.log("====================================");
        NSUXCam.optIntoSchematicRecordings(); // Enable iOS screen recordings
        NSUXCam.startWithConfiguration(config); // Start UXCam with configuration
    }
}
