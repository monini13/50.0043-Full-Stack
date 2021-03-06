# Flask API
**IMPLEMENTED**\
[**GET** /home](#get-home) -> get 20 book summaries for home page\
[**GET** /home/category/&lt;category&gt;](#get-homecategorycategory) -> get 20 book summaries for category\
[**POST** /book/&lt;asin&gt;](#post-bookasin) -> Add reviews\
[**POST** /add/book](#post-addbook) -> Add a new book\
[**POST** /signin](#post-signin) -> Sign in as an existing user\
[**POST** /signup](#post-signup) -> Sign up as a new user\
[**GET** /book/&lt;asin&gt;](#get-bookasin) -> Get book metadata and reviews\
[**GET** /reviews/&lt;asin&gt;](#get-reviewsasin) -> Get book metadata and reviews\
[**POST** /reviews/helpful/&lt;asin&gt;](#post-reviewshelpfulasin)\
**NOT IMPLEMENTED**\
NONE
## **GET** /home
Returns array of JSON\
first 20 books that mongo gets might not be the same everytime\
optional params number -> how many books to return default 20
## **GET** /home/category/&lt;category&gt;
Returns array of JSON\
metadata of books related to category
Case insensitive
matches anywhere in the word
optional params number -> how many books to return default 20
## **POST** /book/&lt;asin&gt;
Add a review by ASIN from the book\
Content-Type: application/json
### Input
```
{
    "overall": 5,
    "reviewText": "test",
    "reviewerName": "John",
    "reviewerID":"GHJKGMHHGFFGB",
    "summary": "book was awesome",
    "helpful": OPTIONAL,
    "reviewTime": OPTIONAL,
    "UnixReviewTime": OPTIONAL
}
```
```
fetch("http://localhost:5000/book/ASIN12345", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
    "overall": 5,
    "reviewText": "test",
    "reviewerName": "John",
    "reviewerID": "GHJKGMHHGFFGB",
    "summary": "book was awesome"
  }
})
```
Expected Response: 200
## **POST** /add/book;
Add a new book \
Content-Type: application/json
### Input
```
{
    "asin": "A000123123",
    "title": "test",
    "description": "this is a test",
    "imUrl":"www.picture.com",
    "categories": ["anime","manga"]
}
```
```
fetch("http://localhost:5000/add/book", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
     "asin": "A000123123",
    "title": "test",
    "description": "this is a test",
    "imUrl":"www.picture.com",
    "categories": ["anime","manga"]
  }
})
```
Expected Response: 200
## **POST** /signin;
Sign in as an existing user. \
Content-Type: application/json
### Input
```
{
  "username" : "username1",
  "password" : "password1"
}
```
```
fetch("http://localhost:5000/signin", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
    "username" : "username1",
    "password" : "password1"
  }
})
```
Expected Response: 200
Returns: JWT Token for token-required APIs.
## **POST** /signup;
Sign up as a new user. \
Content-Type: application/json
### Input
```
{
  "username" : "username1",
  "password" : "password1"
}
```
```
fetch("http://localhost:5000/signin", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": {
    "username" : "username1",
    "password" : "password1"
  }
})
```
Expected Response: 200
## **GET** /book/&lt;asin&gt;
All query parameters are optional

**GET** book/B000F83SZQ?verbose=3&also_bought=1&buy_after_viewing=1&num_reviews=3\
**Query Parameters**\
Verbose (default=2)
* 1: returns summary only
* 2: returns metadata and reviews
* 3: return metadata,reviews and summary of suggested books 

num_reviews (default=5)\
also_bought (default=1)\
buyafterviewing (default=1)

Only when verbose = 3 will also_bought and buyafterviewing be used. \
Show number of summaries in also_bought and buyafterviewing \


### Sample response
**GET** http://localhost:5000/book/B000F83SZQ?verbose=1
```
{
  "_id": {
    "$oid": "5d9c8812617c740c174bc7fe"
  },
  "asin": "B000F83SZQ",
  "imUrl": "http://ecx.images-amazon.com/images/I/51yLqHe%2BFqL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg"
}
```
**GET** http://localhost:5000/book/B000F83SZQ?verbose=2
```
{
  "_id": {
    "$oid": "5d9c8812617c740c174bc7fe"
  },
  "asin": "B000F83SZQ",
  "price": 0.0,
  "imUrl": "http://ecx.images-amazon.com/images/I/51yLqHe%2BFqL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg",
  "related": {
    "also_bought": [
      "B0080H1C0W"
    ],
    "buy_after_viewing": [
      "B006HCTWVS",
      "B009FZPMFO",
      "B00F1I0C40",
      "B00IVC9IQG"
    ]
  },
  "categories": [
    [
      "Books",
      "Literature & Fiction"
    ],
    [
      "Books",
      "Mystery, Thriller & Suspense",
      "Thrillers & Suspense",
      "Suspense"
    ],
    [
      "Kindle Store",
      "Kindle eBooks",
      "Mystery, Thriller & Suspense",
      "Suspense"
    ]
  ],
  "reviews": [
    {
      "id": 1,
      "asin": "B000F83SZQ",
      "helpful": "[0, 0]",
      "overall": 5,
      "reviewText": "I enjoy vintage books and movies so I enjoyed reading this book.  The plot was unusual.  Don't think killing someone in self-defense but leaving the scene and the body without notifying the police or hitting someone in the jaw to knock them out would wash today.Still it was a good read for me.",
      "reviewTime": "05 5, 2014",
      "reviewerID": "A1F6404F1VG29J",
      "reviewerName": "Avidreader",
      "summary": "Nice vintage story",
      "unixReviewTime": 1399248000
    }
  ]
}
```
**GET** http://localhost:5000/book/B000F83SZQ?verbose=3
```
{
  "_id": {
    "$oid": "5d9c8812617c740c174bc7fe"
  },
  "asin": "B000F83SZQ",
  "price": 0.0,
  "imUrl": "http://ecx.images-amazon.com/images/I/51yLqHe%2BFqL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg",
  "related": {
    "also_bought": [
      {
        "_id": {
          "$oid": "5d9c8822617c740c174e12aa"
        },
        "asin": "B0080H1C0W",
        "imUrl": "http://ecx.images-amazon.com/images/I/51dUSTPE-2L._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg"
      }
    ],
    "buy_after_viewing": [
      {
        "_id": {
          "$oid": "5d9c881d617c740c174d6045"
        },
        "asin": "B006HCTWVS",
        "description": "InFrosted ShadowNancy Warren delivers a rollicking, fun mystery ride filled with murder, mayhem and makeup! -- Wendy Roberts, author of the Ghost Dusters mystery seriesUltimate Concealer, Toni Diamond Mysteries, Book 2:A touch of romance. A large dose of mystery. An even larger dose of fashion sense. And at least one character that you just want to hit on the head in hopes it would knock some sense into him. I've enjoyed both of these books and look forward to more.Jutzie, Top 1000 Amazon Reviewer",
        "imUrl": "http://ecx.images-amazon.com/images/I/51eKXbQwsgL._BO2,204,203,200_PIsitb-sticker-v3-big,TopRight,0,-55_SX278_SY278_PIkin4,BottomRight,1,22_AA300_SH20_OU01_.jpg"
      }
    ]
  },
  "categories": [
    [
      "Books",
      "Literature & Fiction"
    ],
    [
      "Books",
      "Mystery, Thriller & Suspense",
      "Thrillers & Suspense",
      "Suspense"
    ],
    [
      "Kindle Store",
      "Kindle eBooks",
      "Mystery, Thriller & Suspense",
      "Suspense"
    ]
  ],
  "reviews": [
    {
      "id": 1,
      "asin": "B000F83SZQ",
      "helpful": "[0, 0]",
      "overall": 5,
      "reviewText": "I enjoy vintage books and movies so I enjoyed reading this book.  The plot was unusual.  Don't think killing someone in self-defense but leaving the scene and the body without notifying the police or hitting someone in the jaw to knock them out would wash today.Still it was a good read for me.",
      "reviewTime": "05 5, 2014",
      "reviewerID": "A1F6404F1VG29J",
      "reviewerName": "Avidreader",
      "summary": "Nice vintage story",
      "unixReviewTime": 1399248000
    }
  ]
}

```
## **GET** /reviews/&lt;asin&gt;

**GET** reviews/B000F83SZQ

### Sample response
**GET** http://localhost:5000/reviews/B000F83SZQ
```
{
  "count": 7
}
```

## **POST** /reviews/helpful/&lt;asin&gt;
```
{"reviewerID":"ID","helpful":0}
```
### Sample response
```
{
  "asin": "B009EALX3K",
  "helpful": "[3, 2]",
  "id": 308160,
  "overall": 4,
  "reviewText": "Maybe kind of a modern knockoff ofEnjoyed this book. kind of a modern day version of Edgar Rice Burroughs &#34;Land that Time Forgot&#34; plain crash in the Andes with lots of Dinos and adventure.,\"02 23",
  "reviewTime": " 2013\"",
  "reviewerID": "A25UIL96NVXBKD",
  "reviewerName": "Norman W. Snider",
  "summary": "Good Book",
  "unixReviewTime": 1361577600
}
```
