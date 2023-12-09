import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { EquipmentService } from 'src/app/Services/equipment.service';
import { SaveEquipmentService } from 'src/app/Services/save-equipment/save-equipment.service';
import { Equipment } from 'src/app/models/equipment';
@Component({
  selector: 'app-save-equipment',
  templateUrl: './save-equipment.component.html',
  styleUrls: ['./save-equipment.component.css']
})
export class SaveEquipmentComponent {

  equipment:Equipment = new Equipment();
  categories: string[] = ['Office', 'Event', 'Construction'];

  constructor(private service:SaveEquipmentService,private fireStorage:AngularFireStorage  ){
   this.equipment = new Equipment();
  }
  // onSubmit() {
    // const fileInput = document.getElementById('image_equipment') as HTMLInputElement;

    // console.log("****************************")
    // console.log((fileInput.files as FileList)[0] );
    // console.log("****************************")
    
    // }

    onSubmit() {
      const fileInput = document.getElementById('image_equipment') as HTMLInputElement;
      const file = (fileInput.files as FileList)[0];
        // console.log(file.name)
      if (file) {
        this.readAndUploadFile(file);
      } else {
        console.error('No file selected');
      }
    }
    private async readAndUploadFile(file: File) {
      const reader = new FileReader();
      console.log(file)
      // reader.onload = async (event: any) => {
        // The 'event.target.result' contains the base64-encoded file content
        // console.log(event.target.result)
        // this.equipment.image = event.target.result[0];
        // console.log(this.equipment.image)
        // this.saveEquipment();
        if(file){
          const path = `yt/${file.name}`;
          const uploadImage = await this.fireStorage.upload(path,file)
          const url = await uploadImage.ref.getDownloadURL();
          console.log(url);
          this.equipment.image = url;
         this.saveEquipment();
        }

      // };
      // reader.readAsDataURL(file);
    }
  
   private saveEquipment(){
    this.service.onSave(this.equipment).subscribe(
      response => {
        // Handle successful response
        console.log('Equipment saved successfully:', response);
      },
      error => {
        // Handle error
        console.error('Error saving equipment:', error);
      }
    );
  }
  
}
