import { Component, OnInit } from "@angular/core";
import { jobs } from "./customeinterface.type";
import { FileringService } from "./filering.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  jobsOpening: any;
  languageFilter: any = [];
  newJobsOpeningFiltered: any = [];
  originalJobsOpening: any;

  constructor(private service: FileringService) {}

  ngOnInit(): void {
    this.jobsOpening = this.service.filterData();
    this.originalJobsOpening = this.service.filterData();
  }

  removeFilterTag(tag, index) {
    console.log(tag, index);

    this.languageFilter.filter((item) => {
      if (tag == item) {
        this.languageFilter.splice(index, 1);
      }
    });

    console.log(this.languageFilter);

    if (this.languageFilter.length == 0) {
      this.jobsOpening = this.service.filterData();
      this.newJobsOpeningFiltered = [];
    } else {
      const found = this.originalJobsOpening.filter((element) => {
        console.log(element.tags.includes(...this.languageFilter));
        if (this.languageFilter.every((item) => element.tags.includes(item))) {
          return true;
        }
      });

      console.log(found);

      this.newJobsOpeningFiltered = found;
      if (this.newJobsOpeningFiltered.length > 0) {
        this.jobsOpening = this.newJobsOpeningFiltered;
      }
    }
  }

  clearFilter() {
    this.languageFilter = [];
  }

  jobFilter(Language, Index, Id) {
    if (this.languageFilter.length == 0) {
      this.languageFilter.push(Language);
    } else {
      var found = this.languageFilter.some(
        (element, index) => element.lang == Language
      );
      if (!found) {
        this.languageFilter.push(Language);
      }
    }

    if (this.newJobsOpeningFiltered == 0) {
      let found = this.originalJobsOpening.filter((element) => {
        if (element.tags.includes(Language)) {
          return true;
        }
      });

      this.newJobsOpeningFiltered = found;
    } else {
      let idFound = this.newJobsOpeningFiltered.filter((element) => {
        if (element.tags.includes(Language)) {
          return true;
        }
      });

      this.newJobsOpeningFiltered = idFound;
    }

    if (this.newJobsOpeningFiltered.length > 0) {
      this.jobsOpening = this.newJobsOpeningFiltered;
    }
  }
}
