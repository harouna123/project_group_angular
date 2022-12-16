import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {

  les_livres:{id_livre:number,titre:string,image_url:string}[] = []

  path_backend:string = "http://localhost/mon_projet_backend-main/uploads/"

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister()
  }

  lister(){
    this.http.get("http://localhost/mon_projet_backend-main/index.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_livres = reponse
    })
  }

}
