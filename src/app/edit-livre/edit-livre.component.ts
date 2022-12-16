import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {
  livre:{id_livre:number,titre:string,image_url:string}={
    id_livre:0,
    titre:"",
    image_url:""
  }
  id_livre:number=0
  constructor(private rout_actuelle:ActivatedRoute,private http:HttpClient) { 
    rout_actuelle.params.subscribe((les_parametres:any)=>{
      this.id_livre=les_parametres["id_livre"]
      this.editer()
    })
  }

  editer(){
    this.http.get("http://localhost/mon_projet_backend-main/editLivre.php?id="+this.id_livre)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.livre = reponse
    })
    
  }

  ngOnInit(): void {
    
  }

}
