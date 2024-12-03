import { Post } from "./05-dip-b";
import localPost from "./data/local-db.json";


// Clase Abstracta
export abstract class PostProvider {

  abstract getPosts(): Promise<Post[]>
  
}


// Clases concretas implementando la clase abstracta
export class LocalDataBaseService implements PostProvider {
  async getPosts() {
    return [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "lorem ipsum dolor sit amet...\nquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ]
  }
}

export class JsonDataBaseService implements PostProvider {

  async getPosts() {
    return localPost;
  }
  
}

// TODO: Implementar una nueva clase que consuma http://jsonplaceholder.typicode.com/posts

export class WebApiPostService implements PostProvider {
  async getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
  }
}