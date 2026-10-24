# GitHub Profile Finder 🔍

A responsive web application to search GitHub users and view their public profile information using the GitHub REST API.

## Features

- Search GitHub users by username
- Display profile picture, name, username, and bio
- Show followers, following, and public repositories
- Direct link to the GitHub profile
- Responsive design
- Loading animation

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub REST API

## Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Profile Page

![Profile Page](./screenshots/profile.png)

## How to Use

1. Enter a GitHub username.
2. Click the findbutton.
3. View the user's public profile information.

## API

`https://api.github.com/users/{username}`

## 📁 Project Structure

```text
github-profile-finder/
├── homePage/
│   ├── index.html
│   ├── style.css
│   └── home.js
├── resultPage/
│   ├── result.html
│   ├── result.css
│   └── result.js
├── screenshots/
│   ├── home.png
│   └── profile.png
└── README.md
```

## Author

Created as a JavaScript practice project.
