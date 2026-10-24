const name = sessionStorage.getItem("username");
const username = document.getElementsByClassName("username")[0];
const avtar = document.getElementsByTagName("img")[0];
const bio = document.getElementsByClassName("bio")[0];
const gitlink = document.getElementsByClassName("gitlink")[0];
const followingnum = document.getElementsByClassName("followingnum")[0];
const follownum = document.getElementsByClassName("follownum")[0];
const reponum = document.getElementsByClassName("reponum")[0];
const loader = document.getElementsByClassName("loader")[0];
const container = document.getElementsByClassName("container")[0];
const url = document.createElement("a");
const fullname = document.getElementsByClassName("name")[0];
url.innerText = "Profile link";
url.style.fontSize = "15px";
url.style.color = "green";

async function fetchdata() {
  const api = await fetch(`https://api.github.com/users/${name}`);
  try {
    if (!api.ok) {
      throw new Error("User not found");
    }
    const data = await api.json();
    if (api.ok) {
      username.innerText = data.login;
      fullname.innerText = data.name;
      followingnum.innerText = data.following;
      follownum.innerText = data.followers;
      reponum.innerText = data.public_repos;
      avtar.src = data.avatar_url;
      if (!data.bio) {
        bio.innerText = "Bio is empty";
      } else {
        bio.innerText = data.bio;
      }
      url.href = data.html_url;
      gitlink.append(url);
      container.style.filter = "none";
      loader.style.display = "none";
    }
  } catch (err) {
    alert(err.message);
    window.location.href = "./index.html";
  }

  console.log(data);
}

fetchdata();
