import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
/*
<ul>
  <li>Mars soil sample</li>
  <li>Plant growth in habitat</li>
  <li>Human bone density</li>
</ul>*/
  constructor() { }

  ngOnInit() {
  }

  experimentBeingEdited: object = null;

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Planet growth in habitat"},
    {name: "Human bone density"}
  ]

  add(experimentName: string) {
    if(this.experiments.find(x => x["name"].toLowerCase() === experimentName.toLowerCase()) === undefined){
      this.experiments.push({name: experimentName});
    }
  }

  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
 }

 save(name: string, experiment: object) {
  experiment['name'] = name;
  this.experimentBeingEdited = null;
  }

}
