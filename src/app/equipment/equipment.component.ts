import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  /*<ul>
  <li>Habitat dome</li>
  <li>Drones</li>
  <li>Food containers</li>
  <li>Oxygen tanks</li>
</ul>*/

  constructor() { }

  ngOnInit() {
  }

  equipmentBeingEdited: object = null;

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen Tanks"}
  ]

  add(equipmentName: string) {
    if(this.equipment.find(x => x["name"].toLowerCase() === equipmentName.toLowerCase()) === undefined){
      this.equipment.push({name: equipmentName});
    }
  }

  remove(equipment: object) {
    let index = this.equipment.indexOf(equipment);
    this.equipment.splice(index, 1);
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
 }

 save(name: string, equipment: object) {
  equipment['name'] = name;
  this.equipmentBeingEdited = null;
  }

}
