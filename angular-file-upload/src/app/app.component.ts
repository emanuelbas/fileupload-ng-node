import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    uploadedFiles: Array < File > = [];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    fileChange(element:any) {
        console.log("se cambio de archivo")
        this.uploadedFiles = element.target.files;
    }

    upload() {
      console.log("@@@ form data @@@")
        let formData = new FormData();
        
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        console.log(formData)
        this.http.post('/api/upload', formData)
            .subscribe((response) => {
                console.log('response received is ', response);
            })
    }
    saluda() {
      alert()
    }

}