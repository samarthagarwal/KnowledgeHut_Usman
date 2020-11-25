import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  todos: any[] = [];

  constructor(private alertCtrl: AlertController) { 
    this.getTodos()
  }

  ngOnInit() {
  }

  async createTodo() {

    let alert = await this.alertCtrl.create({
      header: "New ToDo",
      subHeader: "Enter the details of the new ToDo",
      inputs: [{
        type: "text",
        name: "todo_title",
        label: "Title"
      }, {
        type: "textarea",
        name: "todo_description",
        label: "Description"
      }],
      buttons: [{
        text: "Create",
        handler: async (data) => {
          console.log(data);

          // save to firestore
          await firebase.firestore().collection("todos").add({
            "todo_title": data.todo_title,
            "todo_description": data.todo_description,
            "todo_created": new Date(),
            "todo_owner": firebase.auth().currentUser.uid,
            "todo_status": "incomplete"
          });

          this.getTodos();
        }
      }]
    });

    alert.present();
  }

  async getTodos() {

    let response = await firebase.firestore().collection("todos").where("todo_owner", "==", firebase.auth().currentUser.uid).get();

    this.todos = response.docs;

  }

}
