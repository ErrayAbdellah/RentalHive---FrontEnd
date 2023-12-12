import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { UpdateEquipmentService } from 'src/app/Services/upadate-equipment/update-equipment.service';
import { Equipment } from 'src/app/models/equipment';

@Component({
  selector: 'app-upadte-equipment',
  templateUrl: './upadate-equipment.component.html',
  styleUrls: ['./upadate-equipment.component.css']
})
export class UpadteEquipmentComponent {

   equipment: Equipment;
   categories: string[] = ['Office', 'Event', 'Construction'];
    id:number ;
  constructor(private service:UpdateEquipmentService,private route: ActivatedRoute,private fireStorage:AngularFireStorage){}

  // ngOnInit() {
  // Using snapshot

  // If you prefer using observable (useful for component reuse)
  // this.route.paramMap.subscribe(params => {
  //   const id = params.get('id');
  //   // Do something with the id
  // });
  // }
  ngOnInit(): void {
  // const id = this.route.snapshot.paramMap.get('id');

    console.log("hello");
    this.route.params.subscribe(params => {
      this.id = params['id'];
      // Perform actions based on the user ID
      console.log('User ID:', this.id);
      this.getEquipmentById(this.id);
    });
  }

  getEquipmentById(id:number):void{
    this.service.getEquipmentById(id).subscribe(
      (data) => {
      this.equipment = data;
      console.log(this.equipment);
      },
      (error) => {
        console.error('Error loading equipment:', error);
      }
    );
  }

  onSubmit() {
    const fileInput = document.getElementById('image_equipmentUpdtae') as HTMLInputElement;
    const file = (fileInput.files as FileList)[0];
      // console.log(file.name)
    if (file) {
      this.readAndUploadFile(file);
    } else {
      this.saveEquipment();
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
        // const path = `yt/${file.name}`;
        // const uploadImage = await this.fireStorage.upload(path,file)
        // const url = await uploadImage.ref.getDownloadURL();
        // console.log(url);
        // this.equipment.image = url;
        this.equipment.image = "url";
        this.saveEquipment();
      }

    // };
    // reader.readAsDataURL(file);
  }

 private saveEquipment(){
  this.service.updateEquipment(this.equipment,this.id).subscribe(
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

  onDeleteClick(id: number): void {
    console.log("hellllllo"+id)
    this.service.deleteEquipment(id).subscribe(
      () => {
        console.log('Equipment deleted successfully');
      },
      (error) => {
        console.error('Error deleting equipment', error);
      }
    );
  }

}
