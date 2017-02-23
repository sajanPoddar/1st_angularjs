import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'

@Component({
	moduleId: module.id,
  	selector: 'user',
  	templateUrl: 'user.component.html',  
  	providers: [PostsService]
})
export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];
 	constructor(private postsService: PostsService)
	{
	this.name = 'Sajan Poddar';
	this.email = 'sajan@gmail.com'
	this.address = {
		street : 'hospital road',
		city : 'Lakshmipur',
		country : 'Bangladesh',
	 }
	 this.hobbies = ['Music', 'Movies', 'Sports'];
	 this.showHobbies = false;
	 this.postsService.getPosts().subscribe(
	 posts => { console.log(posts);
	 });
	}
	toggleHobbies(){
		if(this.showHobbies == true)
		{
		this.showHobbies = false;
		}
		else{
		this.showHobbies = true;
		}
		
	}
	addHobby(hobby)
	{
		this.hobbies.push(hobby);
	}
	deleteHobby(i)
	{
		this.hobbies.splice(i, 1);
	}
}
interface address{
	street: string;
	city: string;
	country: string;
}
interface Post{
	id: number;
	title: string;
	body: string;
}
	
