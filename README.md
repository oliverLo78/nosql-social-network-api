# nosql-social-network-api

MongoDB is popular for its speed with large amounts of data and flexibility with unstructured data. Fullstack application API for a social network web app where users can share thoughts, react to friend's thoughts and create a friend list.
<p id="readme-top"></p>

![License Shield](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)
[![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/oliver-lopez78/)

## Description

Description text

While building this project I learned to:

- create a application using mongoDB instead of mySQL and the Mongoose 
- include schema to create user model 
- to transform Objects after querying MongoDb: toJSON and toObject.
- use .populate to populate thoughts and reactions for that User

### Built With

 ![MongoDB Shield](https://img.shields.io/badge/MongoDB-47A248?&style=for-the-badge&logo=mongodb&logoColor=white)
 ![Express Shield](https://img.shields.io/badge/Express-000000?&style=for-the-badge&logo=express&logoColor=white)
 ![Insomnia Shield](https://img.shields.io/badge/Insomnia-4000BF?&style=for-the-badge&logo=insomnia&logoColor=white)
 ![Mongoose Shield](https://img.shields.io/badge/Mongoose-AA2929?&style=for-the-badge&logo=matrix&logoColor=white)
 

## Table of Contents
- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#insomnia)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

```
git clone git@github.com:oliverLo78/nosql-social-network-api.git
```
```
npm init -y
```
```
npm i express
```
```
npm i mongoose
```
```
npm start
```
- to fire up your server then go over to insomnia to test all your routes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

### Insomnia to test routes
Test Description

[NoSQL Oliver Lopez video Nov 29, 2022 5_34 PM.webm](https://user-images.githubusercontent.com/109435666/204668754-8efe3d58-752b-4b3d-8baf-f20145c96564.webm)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

For any further questions feel free to contact me via:
- GitHub: [GitHub oliverLo78](https://github.com/oliverLo78)
- Email: [oliverberto@gmail.com](mailto:oliverberto@gmail.com)
- LinkedIn: [Name on LinkedIn](https://www.linkedin.com/in/oliver-lopez78/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

