import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PublishersService} from "../../../services/publishers.service";


@Component({
  selector: 'app-dialog-add-edit-publisher',
  templateUrl: './dialog-add-edit-publisher.component.html',
  styleUrls: ['./dialog-add-edit-publisher.component.scss']
})
export class DialogAddEditPublisherComponent implements OnInit {

  public title: string;
  public publishersForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    rating: new FormControl(0),
    id: new FormControl(0)

  });

  constructor(
    // @ts-ignore
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogAddEditPublisherComponent>,
    private publishersService: PublishersService
  ) {
    console.log(this.data);
    if (this.data.publisher){
      this.title = 'Edit Publisher Info';
      this.publishersForm.patchValue(this.data.publisher);
    }else{
      this.title = 'Add Publisher';
    }
  }

  get name(): AbstractControl{
    // @ts-ignore
    return this.publishersForm.get('name');
  }

  get country(): AbstractControl{
    // @ts-ignore
    return this.publishersForm.get('country');
  }

  get rating(): AbstractControl{
    // @ts-ignore
    return this.publishersForm.get('rating');
  }

  get id(): AbstractControl{
    // @ts-ignore
    return this.publishersForm.get('id');
  }

  ngOnInit(): void {
  }

  public closeDialog():void{
    this.dialogRef.close();
  }

  public saveData(): void{
    console.log(this.publishersForm.value);
    this.publishersService.createPublisher(this.publishersForm.value).subscribe(() =>{
      this.dialogRef.close(this.publishersForm.value);
    });
  }

}
