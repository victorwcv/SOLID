import { PhotoService, PostService, TodoService } from "./02-ocp-b";
import { HttpClient } from "./02-ocp-c";

(async () => {

  const httpClient = new HttpClient();
  
  const photoService = new PhotoService( httpClient );
  const todoService = new TodoService( httpClient );
  const postService = new PostService( httpClient );

  const photos = await photoService.getPhotos();
  const todoItems = await todoService.getTodoItems();
  const posts = await postService.getPosts();

  console.log({ photos, todoItems, posts });
  
})()