function User(userName, passWord, id){

	var user = {}

	user.id = id
	user.username = userName;
	user.passWord = passWord;
	user.posts = [];
	user.comments = [];

	return user;
}