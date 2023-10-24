// Filename: SophisticatedComplexCode.js

/**
 * This code demonstrates a sophisticated and elaborate JavaScript program that showcases various advanced concepts and techniques.
 *
 * The program simulates a social media application where users can create profiles, post messages, and interact with each other.
 * It includes functionality such as creating new accounts, deleting accounts, searching for users, following/unfollowing, liking/disliking posts, etc.
 *
 * This code is meant for educational purposes only and doesn't have a real-life implementation.
 *
 * Below is the detailed implementation.
 */

// User class representing a user profile
class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.followers = [];
    this.following = [];
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

  follow(user) {
    if (!this.isFollowing(user)) {
      this.following.push(user);
      user.followers.push(this);
    }
  }

  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index > -1) {
      this.following.splice(index, 1);
      user.followers.splice(user.followers.indexOf(this), 1);
    }
  }

  isFollowing(user) {
    return this.following.includes(user);
  }

  likePost(post) {
    post.addLike(this);
  }

  dislikePost(post) {
    post.removeLike(this);
  }
}

// Post class representing a user's post
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = [];
  }

  addLike(user) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  removeLike(user) {
    const index = this.likes.indexOf(user);
    if (index > -1) {
      this.likes.splice(index, 1);
    }
  }
}

// Sample Usage
const john = new User("John Doe", "johnd", "john@example.com", "123456");
const alice = new User("Alice Smith", "alices", "alice@example.com", "qwerty");

john.createPost("Hello, world!");
alice.createPost("Hey, everyone!");

john.follow(alice);
alice.follow(john);

const post = john.createPost("Check out this cool website!");
alice.likePost(post);

console.log(john.following);
console.log(alice.followers);
console.log(post.likes);
console.log(john.isFollowing(alice));