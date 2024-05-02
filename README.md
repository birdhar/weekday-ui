
#  Candidate Application Platform

UI of a candidate application platform is created that allows users to view job listings. The platform provides a user-friendly interface for viewing and applying to jobs. 

For the UI / Designs please install this extension where you can see the job card and filters. Please note that the behavior should be infinite scroll and not a load more button.  Please note that for scope of this assignment you only need to consider the Search jobs section only. You are not required to implement the logic / UI for post apply.

## Key Features:

**Infinite Scroll:**  Here infinite scroll behaviour is added. When user scrolls down to the bottom of the page, the platform  fetches and display more jobs automatically.


**Filter:** 


**Responsive Design:**  Diiferent filters are added that allows users to refine the job listings based on different values.










## Tech Stack

 ReactJs, CSS


## API Reference

#### Get all jobs

```https
  POST /https://api.weekday.technology/adhoc/getSampleJdJSON
```

| Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | Items per page | 
| `offset` | `number` | Page number  | 



## Run Locally

Clone the project

```bash
  git clone https://github.com/birdhar/weekday-ui.git
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

