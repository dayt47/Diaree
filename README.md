
# Dιαɾҽҽ 

Diaree is a simple react web application which makes it easy to write a daily diary for every day. The user can add tags to the diary entry together with pictures. The tags can be added and deleted. The user can choose a past day to enter a new diary entry. If there is already one, the entry will show up.

Another feature is the fuzzy search, the user just has to enter at least 3 characters and the fuzzy search will show all the entries with the found search term no matter where in the sentence it is.


## Features

- Tags for the diary entries
- Fuzzy search bar
- Diary entry for any past date
- Show 3 recent entries on dashboard


## Screenshots

<img width="896" alt="diary" src="https://github.com/dayt47/Diaree/assets/32074282/c09bef26-f0fe-4770-984e-dfdf2283d636">




## Run Locally

Clone the project

```bash
  git clone https://github.com/dayt47/Diaree
```

Go to the project directory

```bash
  cd Diaree
```

Install dependencies

```bash
  npm run install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** React, Vite, FuseJS

**Server:** Node, Express, Cloudinary


## Authors

- [@Oguz Tugan](https://www.github.com/dayt47)



## Extras

If you want to use the cloudinary image upload, you have to create a cloudinary account and fill in the .env file in the server directory:
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
