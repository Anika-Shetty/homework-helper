# README

The site can be accessed at https://zenhomework.herokuapp.com/
Login using: (demo@test.com / zenzen)

[The presentation can be viewed here](https://docs.google.com/viewer?url=https://github.com/kittycat1/ZenHomework/files/6331567/Zen.Homework.pdf)

### Home screen
![image](https://user-images.githubusercontent.com/38593727/115149545-80c5b800-a019-11eb-93d2-fea000385610.png)

### Screen during work
![image](https://user-images.githubusercontent.com/38593727/115149681-0f3a3980-a01a-11eb-8208-b048967e59b4.png)


### Screen during short break
![image](https://user-images.githubusercontent.com/38593727/115149690-1eb98280-a01a-11eb-8636-9035c42f3733.png)

### Screen during long break
![image](https://user-images.githubusercontent.com/38593727/115149738-54f70200-a01a-11eb-90ab-5e96fac65521.png)

rails generate model Country name:string code:string
rails generate model State name:string code:string country:references
rails generate model Grade name:string  state:references
rails generate model Subject name:string grade:references
rails generate model TextBook name:string grade:references subject:references author:string description:string publisher:string
rails generate model TextBookEdition name:string text_book:references year:string price:float isbn:string
rails generate model Submission comment:string text_book_edition:references user:references chapter:string page_number:string
rails generate model User avatar:attachment
rails generate model TextBook cover:attachment
rails generate model Submission picture:attachment
