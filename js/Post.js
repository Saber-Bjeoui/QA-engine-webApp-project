function Post(title, body, id){

	var post = {}

	post.id = id
	post.title = title;
	post.images = [];
	post.comments = [];
	post.addPost = addPost;

	return post;
}

var addPost = function(){

}