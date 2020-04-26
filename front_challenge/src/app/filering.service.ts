import { Injectable } from "@angular/core";
import * as Data from "../assets/data/data.json";
import { jobs } from "./customeinterface.type";

@Injectable({
  providedIn: "root",
})
export class FileringService {
  jobslists: jobs[];
  Languages: string[];

  constructor() {}

  getList() {
    return (this.jobslists = (Data as any).default);
  }

  filterData() {
    let jobs = (Data as any).default;

    let wantedList = [];

    for (const {
      role: Role,
      level: Level,
      languages: Lang,
      tools: Tools,
      ...rest
    } of jobs) {
      let list = [];

      list.push(...[Role, Level]);

      if (Tools) {
        list.push(...Tools);
      }

      if (Lang) {
        list.push(...Lang);
      }

      rest.tags = list;

      wantedList.push(rest);
    }

    return wantedList;
  }
}
