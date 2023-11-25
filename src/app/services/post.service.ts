import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [ 
    new Post(0, 'Tecnología', 'Innovaciones Tecnológicas','Explorando las últimas novedades en el mundo de la tecnología') ,
    new Post(1, 'Salud', 'Avances Médicos','Una mirada a los desarrollos más recientes en el ámbito de la salud') ,
    new Post(2, 'Viajes', 'Destinos Fascinantes','Descubre los destinos más emocionantes ') ,
    new Post(3, 'Ciencia', 'Descubrimientos Científicos','Explorando los avances científicos más emocionantes del momento') ,
    
  ]
  
  getPosts = () => this.posts
  getPost = (idPost: number) => this.posts.find(post => post.id == idPost);
}

export class Post {
  constructor(
    public id: number, 
    public title: string,
    public subtitle: string,
    public description: string
  ) {}
}

